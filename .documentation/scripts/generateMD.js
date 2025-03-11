const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Load and parse the OpenAPI YAML file
const yamlFilePath = path.join(__dirname, '..', 'openAPI-spec.yaml');
const themePath = path.join(__dirname, '..', 'api-theme.json');
const outputFile = path.resolve(__dirname, '../../.documentation/all-endpoints.md');

// Use a try-catch block to handle the file reading
let openAPI;
let theme;
try {
    const yamlFile = fs.readFileSync(yamlFilePath, 'utf8');
    openAPI = yaml.load(yamlFile);
    // Your script's code to process the YAML file continues here...
} catch (error) {
    console.error('Error reading the openAPI YAML file:', error.message);
    process.exit(1); // Exit the process with an error code
}
try {
    const themeFile = fs.readFileSync(themePath, 'utf8');
    theme = JSON.parse(themeFile);
    // Your script's code to process the JSON file continues here...
} catch (error) {
    console.error('Error reading the theme JSON file:', error.message);
    process.exit(1); // Exit the process with an error code
}

function getRandomColor() {
    // Generate a random hex color
    return Math.floor(Math.random() * 16777215).toString(16);
}

// Function to generate a random color
function updateThemeWithNewTagColor(tag) {
    if (!theme.tag_colors[tag]) {
        theme.tag_colors[tag] = getRandomColor();
        // Write updated theme back to the file
        fs.writeFileSync(themePath, JSON.stringify(theme, null, 2)); // Pretty print the JSON
    }
}

function generateMarkdown(data, theme) {
    const { description, version } = data.info;
    const versionBadge = `<a href="#"><img src="https://img.shields.io/badge/version-${version}-blue" alt="API version ${version}"></a>`;

    let content = process.env.HEADER_GFMD || '';
    content += `# API Specifications ${versionBadge}\n\n${description}\n\n`;

    // Organize endpoints by tags
    const endpointsByTag = {};
    for (const [endpoint, methods] of Object.entries(data.paths)) {
        for (const [method, details] of Object.entries(methods)) {
            if (details.tags && Array.isArray(details.tags)) {
                details.tags.forEach(tag => {
                    updateThemeWithNewTagColor(tag); // Ensure the tag color is updated in the theme
                    if (!endpointsByTag[tag]) {
                        endpointsByTag[tag] = [];
                    }
                    endpointsByTag[tag].push({ endpoint, method, details });
                });
            } else {
                // Handle methods without tags by placing them in an 'Miscellaneous' section
                const defaultTag = 'Miscellaneous';
                updateThemeWithNewTagColor(defaultTag);
                if (!endpointsByTag[defaultTag]) {
                    endpointsByTag[defaultTag] = [];
                }
                endpointsByTag[defaultTag].push({ endpoint, method, details });
            }
        }
    }

    // Generate markdown for each tag
    Object.entries(endpointsByTag).forEach(([tag, endpoints]) => {
        content += `<details>\n<summary><h2>${tag} - <sub><sup>Endpoints related to ${tag}</sup></sub></h2></summary>\n\n`;
        endpoints.forEach(({ endpoint, method, details }) => {
            const { summary, requestBody, responses, deprecated } = details;
            const isDeprecated = deprecated === true;
            const methodTheme = isDeprecated ? theme.method_colors['DEP'] : theme.method_colors[method.toUpperCase()] || {};
            const tagBadges = details.tags ? details.tags.map(tag => `<a href="#"><img src="https://img.shields.io/badge/${tag}-${theme.tag_colors[tag]}" alt="${tag}"></a>`).join(' ') : '';

            content += `<details>\n` +
                `<summary><a href="#"><img src="https://img.shields.io/badge/${encodeURIComponent(endpoint)}-${method}?style=flat-square&label=${method.toUpperCase()}&labelColor=${methodTheme.method_color}&color=${methodTheme.description_color}" height=30></a>` +
                `<a href="#"><img alt="Summary" src="https://img.shields.io/badge/v1--0--0-v?style=flat-square&label=${encodeURIComponent(summary)}&labelColor=${methodTheme.description_color}&color=303030" height=30></a> ${tagBadges}</summary>\n\n` +
                `__Summary: ${summary}__\n\n`;

            // Request Body
            if (requestBody && requestBody.content['application/json']) {
                const properties = requestBody.content['application/json'].schema.properties;
                content += "## Request Body\n\n" +
                    "| Property | Type | Description | Required | Schema |\n" +
                    "|----------|------|-------------|----------|--------|\n";
                Object.keys(properties).forEach(prop => {
                    const { type, description } = properties[prop];
                    content += `| \`${prop}\` | \`${type}\` | ${description} | ${requestBody.required ? 'True' : 'False'} | \`${type}\` |\n`;
                });
            }

            // Responses
            content += "## Responses\n\n" +
                "| Code | Description | Content Type | Content Schema |\n" +
                "|------|-------------|--------------|----------------|\n";
            Object.keys(responses).forEach(code => {
                const { description, content: responseContent } = responses[code];
                const contentType = responseContent && Object.keys(responseContent)[0];
                const schema = responseContent && responseContent[contentType] && responseContent[contentType].schema ? `type: ${responseContent[contentType].schema.type}` : 'n/a';
                content += `| <a href="#"><img alt="Static Badge" src="https://img.shields.io/badge/${code}-${theme.response_descriptions[code]}?label=${code}&labelColor=${theme.response_colors[code.substring(0,1)+'XX'].color}&color=${theme.response_colors[code.substring(0,1)+'XX'].description_color}"></a> | ${description} | \`${contentType}\` | \`${schema}\` |\n`;
            });

            content += "</details>\n\n";
        });
        content += "</details>\n\n";
    });

    return content;
}

// Ensure the directory exists
const dir = path.dirname(outputFile);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const markdownContent = generateMarkdown(openAPI, theme);
fs.writeFileSync(outputFile, markdownContent);

console.log('Documentation generated at:', outputFile);