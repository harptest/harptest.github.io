workspace {
    name "Viewpoint"
    description "Viewpoint is a SaaS tool, utilizing NLP to simplify the process Outlook users have to go through to create rules, and integrate with 3rd party services. "
    model {
        user = person "User" {
             tags added1
        }
        coreApi = softwareSystem "Viewpoint Core API" {
            description "Manages and load balances incoming API requests, as well as pulls confidential data."
            tags added1
        }
        aiCore = softwareSystem "Viewpoint AI Core" {
            tags added1
            textGenWebUI = container "Text-Generation-WebUI" {
                description "Handles input and basic processing of text-based rules"
                technology "Docker, Custom Grammar Extension"
                tags added1
            }
            
            
            gearShift = container "Viewpoint-AI-Core" {
                description "Backend processing for rule classification and automation"
                technology "FastAPI, Docker"
                tags added1
                
                interfaceApi = component "AI Interface API"{
                    description "Analyzes the structure of rules, and synthesizes JSON-formatted output"
                    technology "Python, FastAPI"
                    tags added1
                }
                
                group "Utilities" {
                ruleStructureAnalyzer = component "[CLASS] RuleStructureAnalyzer" {
                    description "Analyzes the structure of rules, and synthesizes JSON-formatted output"
                    technology "Python"
                    tags added1
                    
                    
                }
                    ruleStructureAnalyzer -> textGenWebUI  "LLM Inference" "POST" "general, rule" 
                    ruleStructureAnalyzer -> textGenWebUI  "POST /" "POST" "detailed, rule" 
                    
                    textGenWebUI -> ruleStructureAnalyzer "Rule JSON" "Response" "general, rule" 
                    textGenWebUI -> ruleStructureAnalyzer "POST / Response" "{prompt:<string>, user_id:<UUID>}" "detailed, rule" 
                
                knowledgeGraphGenerator = component "[CLASS] KnowledgeGraphGenerator" "Generates knowledge graphs from natural language" "python" "added2" 
                
                    knowledgeGraphGenerator -> textGenWebUI  "LLM Inference" "POST" "general, context" 
                    knowledgeGraphGenerator -> textGenWebUI  "POST /" "POST" "detailed, context" 
                    
                    textGenWebUI -> knowledgeGraphGenerator "Updated Context Graph" "Response" "general, context" 
                    textGenWebUI -> knowledgeGraphGenerator "POST / Response" "{prompt:<string>, user_id:<UUID>}" "detailed, context" 
                
                    
                }
                

            }
        }
        coreApi -> interfaceApi "[QUERY] Rule processing request" "POST /rule" "general, rule"
        coreApi -> interfaceApi  "[QUERY] POST /rule" "{prompt:<string>, user_id:<UUID>}" "detailed, rule" 
        
        interfaceApi -> ruleStructureAnalyzer "[CALL] Natural Language Rule" "<string>"
        
        ruleStructureAnalyzer -> interfaceApi "[RETURN] Rule JSON" "JSON" "rule"
        
        interfaceApi -> coreApi "[RES] POST /rule" "{prompt:<string>, job_id:<UUID>}" "detailed, rule" 
        interfaceApi -> coreApi "[RES] Processed Rule" "POST /rule" "general, rule" 
        
        
        
        coreApi -> interfaceApi "[QUERY] Email processing request" "POST /email" "general, email, added2"
        coreApi -> interfaceApi  "[QUERY] POST /email" "{emailHeaders:<string>, content:<string>, job_id:<UUID>}" "detailed, email, added2" 

        interfaceApi -> knowledgeGraphGenerator "[CALL] Email Content, job_id" "context, added2"
        
        knowledgeGraphGenerator -> interfaceApi "[RETURN] Updated Graph" "Graph" "context"
        
        interfaceApi -> coreApi "[RES] Updated context graph" "POST /context" "general, context" 
        
    }

    views {
        systemLandscape aiCore {
            include *
            autolayout
            exclude relationship.tag==detailed
        }
        
        systemContext aiCore {
            include *
            autolayout
            exclude relationship.tag==detailed
        }
        
        container aiCore {
            include *
            exclude relationship.tag==detailed
            autolayout
        }
        
        component gearShift {
            include *
            exclude relationship.tag==detailed
            autolayout
            title "[Component] Milestone 7: Multi-Modal Support"
        }
        
        component gearShift {
            include *
            exclude relationship.tag==detailed
            exclude element.tag==added7
            autolayout
            title "[Component] Milestone 6: Efficient NLP Rule Processing"
        }
        
        component gearShift {
            include *
            exclude relationship.tag==detailed
            exclude element.tag==added6
            exclude element.tag==added7
            autolayout
            title "[Component] Milestone 5: Advanced NLP Efficiency Expansion"
        }
        
        component gearShift {
            include *
            exclude relationship.tag==detailed
            exclude element.tag==added5
            exclude element.tag==added6
            exclude element.tag==added7
            autolayout
            title "[Component] Milestone 4: Generative AI Integration"
        }
        
        component gearShift {
            include *
            exclude relationship.tag==detailed
            exclude element.tag==added3
            exclude element.tag==added4
            exclude element.tag==added5
            exclude element.tag==added6
            exclude element.tag==added7
            autolayout
            title "[Component] Milestone 3: Inference Action Integration"
        }
        
        component gearShift {
            include *
            exclude relationship.tag==detailed
            exclude element.tag==added3
            exclude element.tag==added4
            exclude element.tag==added5
            exclude element.tag==added6
            exclude element.tag==added7
            autolayout
            title "[Component] Milestone 2: LLM Email Context Graph Generation"
        }
        
        component gearShift {
            include *
            exclude relationship.tag==detailed
            exclude element.tag==added2
            exclude element.tag==added3
            exclude element.tag==added4
            exclude element.tag==added5
            exclude element.tag==added6
            exclude element.tag==added7
            autolayout
            title "[Component] Milestone 1: Rule Processing"
        }
    

        theme default
        branding {
            logo "https://static.wixstatic.com/media/355b75_1c4e29d87f1e449cbdfdb2b623ac66ce~mv2.png/v1/fill/w_292,h_72,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/355b75_1c4e29d87f1e449cbdfdb2b623ac66ce~mv2.png"
        }
    }
}
