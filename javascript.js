
var pathBig = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "A2", "A1", "B1", "C1", "D1", "E1", "F1"];
var pathMiddle = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "B3", "C3", "C2", "C1", "D1", "E1", "F1"];
var pathShort = ["F1", "F2", "F3", "F4", "F5", "E5", "D4", "C4", "C3", "C2", "C1", "D1", "E1", "F1"];
var allPossibleFields = ["A1", "A2", "A3", "A4", "A5", "B1", "B3", "B5", "B6", "C1", "C2", "C3", "C4", "C6", "D1", "D4", "D6", "E1", "E5", "E6", "F1", "F2", "F3", "F4", "F5"];

var playerNumber = 2;
var fieldWithSDG = "";
var isAnswerRight = false;
var diceNumber = 1;

var players = [
    { color: "red", number: 1, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "blue", number: 2, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "green", number: 3, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "yellow", number: 4, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 }
];

var sdgArray = [
    {   number: 1,
        color: "var(--red)",
        url: "url(../img/E-WEB-Goal-01.png)",
        questions: [
            {
                question: "Was bedeutet 'Armut'?",
                answers: [
                    { answer: "Mangel an Ressourcen", result: true },
                    { answer: "Überfluss an Wohlstand", result: false },
                    { answer: "Mangel an Bildung", result: false }
                ]
            },
            {
                question: "Welche globalen Maßnahmen können die Lebensbedingungen der ärmsten Bevölkerungsgruppen verbessern?",
                answers: [
                    { answer: "Steuersenkungen für Reiche", result: false },
                    { answer: "Erhöhung der Militärausgaben", result: false },
                    { answer: "Förderung von Bildung und Gesundheitsdiensten", result: true }
                ]
            },
            {
                question: "Wie könnten innovative Technologien langfristige Lösungen für die Armutskrise schaffen?",
                answers: [
                    { answer: "Förderung von Waffenentwicklung", result: false },
                    { answer: "Steigerung der Produktion von Einwegplastik", result: false },
                    { answer: "Nutzung erneuerbarer Energien und Technologien", result: true }
                ]
            }
        ]        
    },
    {   number: 2,
        color: "var(--mustard)",
        url: "url(../img/E-WEB-Goal-02.png)",
        questions: [
            {
                question: "Warum ist es wichtig, den Hunger in der Welt zu beenden?",
                answers: [
                    { answer: "Förderung von Luxuslebensmitteln", result: false },
                    { answer: "Sicherstellung der Ernährungssicherheit", result: true },
                    { answer: "Erhöhung der Lebensmittelpreise", result: false }
                ]
            },
            {
                question: "Welche landwirtschaftlichen Praktiken könnten dazu beitragen, die Nahrungsmittelproduktion zu steigern und den Hunger zu reduzieren?",
                answers: [
                    { answer: "Einsatz von Gentechnik zur Monopolbildung", result: false },
                    { answer: "Förderung nachhaltiger Anbaumethoden", result: true },
                    { answer: "Erhöhung des Pestizideinsatzes", result: false }
                ]
            },
            {
                question: "Wie könnte die Welt auf eine wachsende Weltbevölkerung reagieren, um sicherzustellen, dass genügend Nahrung für alle vorhanden ist?",
                answers: [
                    { answer: "Reduzierung der Lebensmittelproduktion", result: false },
                    { answer: "Förderung von nachhaltiger Landwirtschaft", result: true },
                    { answer: "Erhöhung der Lebensmittelverschwendung", result: false }
                ]
            }
        ]
    },
    {   number: 3,
        color: "var(--kellygreen)",
        url: "url(../img/E-WEB-Goal-03.png)",
        questions: [
            {
                question: "Warum ist es wichtig, sicherzustellen, dass alle Menschen Zugang zu grundlegenden Gesundheitsdiensten haben?",
                answers: [
                    { answer: "Förderung von Krankheitsausbreitung", result: false },
                    { answer: "Verbesserung der Lebensqualität", result: true },
                    { answer: "Steigerung der Gesundheitskosten", result: false }
                ]
            },
            {
                question: "Wie können Gesundheitssysteme verbessert werden, um sowohl die Prävention als auch die Behandlung von Krankheiten zu fördern?",
                answers: [
                    { answer: "Reduzierung von Impfprogrammen", result: false },
                    { answer: "Förderung von Bildung über Hygiene", result: true },
                    { answer: "Erhöhung von Tabakkonsum", result: false }
                ]
            },
            {
                question: "Wie können kulturelle, sozioökonomische Faktoren die Gesundheit beeinflussen, und wie können Ungleichheiten in diesem Bereich verringert werden?",
                answers: [
                    { answer: "Förderung von kulturellen Praktiken, die die Gesundheit gefährden", result: false },
                    { answer: "Berücksichtigung kultureller Vielfalt bei der Gesundheitsplanung", result: true },
                    { answer: "Erzwungene Assimilation in der Gesundheitspflege", result: false }
                ]
            }
        ]
        
    },
    {   number: 4,
        color: "var(--darkred)",
        url: "url(../img/E-WEB-Goal-04.png)",
        questions: [
            {
                question: "Was bedeutet 'Bildung'?",
                answers: [
                    { answer: "Akkumulation von Reichtum", result: false },
                    { answer: "Vermittlung von Wissen und Fähigkeiten", result: true },
                    { answer: "Förderung von Konflikten", result: false }
                ]
            },
            {
                question: "Wie kann der Zugang zu Bildung weltweit verbessert werden?",
                answers: [
                    { answer: "Verringerung von Bildungsbudgets", result: false },
                    { answer: "Förderung von Online-Lernplattformen", result: true },
                    { answer: "Erhöhung der Schulgebühren", result: false }
                ]
            },
            {
                question: "Welche Rolle spielt Bildung bei der Förderung von Geschlechtergleichstellung?",
                answers: [
                    { answer: "Begrenzung des Bildungszugangs für Frauen", result: false },
                    { answer: "Stärkung von Frauen durch Bildung", result: true },
                    { answer: "Frauenförderung durch wirtschaftliche Benachteiligung", result: false }
                ]
            }
        ]
        
},
    {   number: 5,
        color: "var(--redorange)",
        url: "url(../img/E-WEB-Goal-05.png)", 
        questions: [
            {
                question: "Was bedeutet 'Geschlechtergleichstellung'?",
                answers: [
                    { answer: "Förderung von Geschlechterunterschieden", result: false },
                    { answer: "Gleichberechtigung der Geschlechter", result: true },
                    { answer: "Begrenzung der Frauenrechte", result: false }
                ]
            },
            {
                question: "Welche Maßnahmen könnten dazu beitragen, geschlechtsspezifische Diskriminierung am Arbeitsplatz zu reduzieren?",
                answers: [
                    { answer: "Förderung von sexistischen Einstellungen", result: false },
                    { answer: "Implementierung von geschlechtsspezifischen Gehaltsunterschieden", result: false },
                    { answer: "Förderung von gleichen Chancen und Gehältern", result: true }
                ]
            },
            {
                question: "Wie können stereotype Geschlechterrollen in der Gesellschaft überwunden werden?",
                answers: [
                    { answer: "Festigung traditioneller Rollenbilder", result: false },
                    { answer: "Förderung von Vielfalt und Selbstbestimmung", result: true },
                    { answer: "Einschränkung der Bildungsmöglichkeiten für Mädchen", result: false }
                ]
            }
        ]
        
},
    {   number: 6,
        color: "var(--bluebright)",
        url: "url(../img/E-WEB-Goal-06.png)", 
        questions: [
            {
                question: "Was bedeutet 'Sauberes Wasser und Sanitäre Einrichtungen'?",
                answers: [
                    { answer: "Förderung von Wasserverschmutzung", result: false },
                    { answer: "Gewährleistung der Gesundheit und Hygiene", result: true },
                    { answer: "Einschränkung des Wasserzugangs", result: false }
                ]
            },
            {
                question: "Wie können Gemeinden den nachhaltigen Wasserverbrauch fördern?",
                answers: [
                    { answer: "Verschwendung von Wasserressourcen", result: false },
                    { answer: "Implementierung von Wasseraufbereitungssystemen", result: true },
                    { answer: "Förderung von umweltschädlichen Praktiken", result: false }
                ]
            },
            {
                question: "Wie können Wasserknappheit und Wasserverschmutzung global angegangen werden?",
                answers: [
                    { answer: "Ignorierung internationaler Umweltabkommen", result: false },
                    { answer: "Förderung von nachhaltigen Wassermanagementpraktiken", result: true },
                    { answer: "Steigerung der industriellen Wasserverschmutzung", result: false }
                ]
            }
        ]
        
},
    {   number: 7,
        color: "var(--yellow)",
        url: "url(../img/E-WEB-Goal-07.png)",
        questions: [
            {
                question: "Was bedeutet 'Bezahlbare und saubere Energie'?",
                answers: [
                    { answer: "Förderung von fossilen Brennstoffen", result: false },
                    { answer: "Zugang zu erschwinglichen und umweltfreundlichen Energiequellen", result: true },
                    { answer: "Beschränkung des Energiezugangs", result: false }
                ]
            },
            {
                question: "Wie können erneuerbare Energien in großem Maßstab implementiert werden?",
                answers: [
                    { answer: "Erhöhung der Nutzung nicht erneuerbarer Energiequellen", result: false },
                    { answer: "Förderung von Solarenergie, Windkraft und anderen erneuerbaren Quellen", result: true },
                    { answer: "Begrenzung des Zugangs zu umweltfreundlichen Energien", result: false }
                ]
            },
            {
                question: "Wie können Energieeffizienz und Nachhaltigkeit in städtischen Gebieten verbessert werden?",
                answers: [
                    { answer: "Vernachlässigung städtischer Umweltauswirkungen", result: false },
                    { answer: "Implementierung von grüner Infrastruktur und Energieeffizienzmaßnahmen", result: true },
                    { answer: "Förderung von umweltschädlichen Praktiken in Städten", result: false }
                ]
            }
        ]
        
},
    {   number: 8,
        color: "var(--redburgundy)",
        url: "url(../img/E-WEB-Goal-08.png)",
        questions: [
            
            {
                question: "Warum ist 'menschliche Arbeit' wichtig?",
                answers: [
                    { answer: "Förderung von Ausbeutung", result: false },
                    { answer: "Sicherstellung fairer Arbeitsbedingungen und Wirtschaftswachstum", result: true },
                    { answer: "Begrenzung des Zugangs zu Arbeitsmöglichkeiten", result: false }
                ]
            },
            {
                question: "Wie können faire Löhne und Arbeitsbedingungen weltweit gefördert werden?",
                answers: [
                    { answer: "Senkung von Mindestlöhnen", result: false },
                    { answer: "Implementierung internationaler Arbeitsstandards", result: true },
                    { answer: "Förderung von Lohndiskriminierung", result: false }
                ]
            },
            {
                question: "Wie können kleine Unternehmen und nachhaltige Wirtschaftsmodelle das Wirtschaftswachstum fördern?",
                answers: [
                    { answer: "Dominanz von Monopolen und Großunternehmen", result: false },
                    { answer: "Förderung von kleinen Unternehmen und sozial verantwortlichen Geschäftspraktiken", result: true },
                    { answer: "Beschränkung des Marktzugangs für kleine Unternehmen", result: false }
                ]
            }
        ]
        
},
    {   number: 9,
        color: "var(--orange)",
        url: "url(../img/E-WEB-Goal-09.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Industrie, Innovation und Infrastruktur'?",
                answers: [
                    { answer: "Förderung veralteter Technologien", result: false },
                    { answer: "Entwicklung moderner Technologien und Infrastrukturen", result: true },
                    { answer: "Beschränkung des technologischen Fortschritts", result: false }
                ]
            },
            {
                question: "Wie können Innovationen zur nachhaltigen Entwicklung beitragen?",
                answers: [
                    { answer: "Begrenzung von Forschung und Entwicklung", result: false },
                    { answer: "Förderung von kreativen Ideen und umweltfreundlichen Technologien", result: true },
                    { answer: "Ignorierung von technologischem Fortschritt", result: false }
                ]
            },
            {
                question: "Wie können Infrastrukturprojekte so gestaltet werden, dass sie umweltverträglich sind?",
                answers: [
                    { answer: "Vernachlässigung von Umweltauswirkungen", result: false },
                    { answer: "Integration von Umweltauflagen und nachhaltigen Baupraktiken", result: true },
                    { answer: "Förderung von umweltschädlichen Infrastrukturprojekten", result: false }
                ]
            }
        ]
        
},
    {   number: 10,
        color: "var(--magenta)",
        url: "url(../img/E-WEB-Goal-10.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Weniger Ungleichheiten'?",
                answers: [
                    { answer: "Förderung von sozialen Unterschieden", result: false },
                    { answer: "Verringerung von Ungleichheiten in Einkommen und Rechten", result: true },
                    { answer: "Begrenzung des Zugangs zu Chancen", result: false }
                ]
            },
            {
                question: "Wie können Diskriminierung und Ungleichheiten in verschiedenen Gesellschaften reduziert werden?",
                answers: [
                    { answer: "Fortsetzung diskriminierender Gesetze", result: false },
                    { answer: "Implementierung von Antidiskriminierungsmaßnahmen und rechtlichen Änderungen", result: true },
                    { answer: "Förderung von Diskriminierung", result: false }
                ]
            },
            {
                question: "Wie können internationale Handelsabkommen dazu beitragen, globale Ungleichheiten zu verringern?",
                answers: [
                    { answer: "Förderung von unfairen Handelspraktiken", result: false },
                    { answer: "Implementierung fairer Handelsabkommen und Unterstützung benachteiligter Regionen", result: true },
                    { answer: "Ignorierung internationaler Handelsabkommen", result: false }
                ]
            }
        ]
        
},
    {   number: 11,
        color: "var(--gold)",
        url: "url(../img/E-WEB-Goal-11.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Nachhaltige Städte und Gemeinden'?",
                answers: [
                    { answer: "Förderung von umweltzerstörenden Bauprojekten", result: false },
                    { answer: "Entwicklung von Städten, die Umweltauswirkungen minimieren", result: true },
                    { answer: "Einschränkung des Zugangs zu städtischer Infrastruktur", result: false }
                ]
            },
            {
                question: "Wie können Städte umweltfreundlicher gestaltet werden, um nachhaltige Entwicklung zu fördern?",
                answers: [
                    { answer: "Förderung von umweltbelastenden Industrien in städtischen Gebieten", result: false },
                    { answer: "Integration von Grünflächen und nachhaltigen Verkehrsmitteln", result: true },
                    { answer: "Begrenzung des öffentlichen Zugangs zu grünen Bereichen", result: false }
                ]
            },
            {
                question: "Warum ist die Förderung von nachhaltigen Städten wichtig für die Umwelt und die Lebensqualität der Menschen?",
                answers: [
                    { answer: "Förderung von Umweltverschmutzung und übermäßigem Ressourcenverbrauch", result: false },
                    { answer: "Verbesserung der Luft- und Wasserqualität, Reduzierung von Verkehrsstaus", result: true },
                    { answer: "Einschränkung des Zugangs zu städtischen Annehmlichkeiten", result: false }
                ]
            }
        ]
        
},
    {   number: 12,
        color: "var(--darkmustard)",
        url: "url(../img/E-WEB-Goal-12.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Verantwortungsbewusster Konsum und Produktion'?",
                answers: [
                    { answer: "Förderung von verschwenderischem Konsumverhalten", result: false },
                    { answer: "Nachhaltige Produktion und Konsumgewohnheiten", result: true },
                    { answer: "Beschränkung des Zugangs zu qualitativ hochwertigen Produkten", result: false }
                ]
            },
            {
                question: "Wie können Verbraucher dazu beitragen, nachhaltigere Produktions- und Konsumpraktiken zu fördern?",
                answers: [
                    { answer: "Fortsetzung von Einweg- und Wegwerfpraktiken", result: false },
                    { answer: "Unterstützung von Unternehmen mit nachhaltigen Produktionsprozessen", result: true },
                    { answer: "Förderung von übermäßigem Ressourcenverbrauch", result: false }
                ]
            },
            {
                question: "Warum ist es wichtig, den ökologischen Fußabdruck zu reduzieren und ressourcenschonende Produkte zu wählen?",
                answers: [
                    { answer: "Förderung von Umweltverschmutzung und Ressourcenausbeutung", result: false },
                    { answer: "Verringerung negativer Umweltauswirkungen und Erhaltung natürlicher Ressourcen", result: true },
                    { answer: "Einschränkung des Zugangs zu umweltfreundlichen Produkten", result: false }
                ]
            }
        ]
        
},
    {   number: 13, 
        color: "var(--greendark)",
        url: "url(../img/E-WEB-Goal-13.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Maßnahmen zum Klimaschutz'?",
                answers: [
                    { answer: "Förderung von umweltverschmutzenden Praktiken", result: false },
                    { answer: "Aktivitäten zur Reduzierung von Treibhausgasemissionen", result: true },
                    { answer: "Beschränkung des Zugangs zu umweltfreundlichen Technologien", result: false }
                ]
            },
            {
                question: "Wie können Regierungen und Unternehmen zur Verringerung der Klimaauswirkungen beitragen?",
                answers: [
                    { answer: "Förderung von Kohle- und Erdölgewinnung", result: false },
                    { answer: "Umstellung auf erneuerbare Energien und nachhaltige Praktiken", result: true },
                    { answer: "Ignorierung von Umweltauflagen", result: false }
                ]
            },
            {
                question: "Warum ist der Klimawandel eine globale Herausforderung, die koordinierte Anstrengungen erfordert?",
                answers: [
                    { answer: "Förderung von umweltschädlichen Praktiken auf nationaler Ebene", result: false },
                    { answer: "Weil Klimaauswirkungen Grenzen überschreiten und weltweite Kooperation notwendig ist", result: true },
                    { answer: "Einschränkung internationaler Umweltvereinbarungen", result: false }
                ]
            }
        ]
        
},
    {   number: 14,
        color: "var(--blue)",
        url: "url(../img/E-WEB-Goal-14.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Leben unter Wasser'?",
                answers: [
                    { answer: "Förderung von Verschmutzung der Meere und Ozeane", result: false },
                    { answer: "Schutz und nachhaltige Nutzung der Ozeane und Meeresressourcen", result: true },
                    { answer: "Beschränkung des Zugangs zu Wasserlebewesen", result: false }
                ]
            },
            {
                question: "Wie können Überfischung und Verschmutzung der Meere reduziert werden?",
                answers: [
                    { answer: "Erhöhung von Fangquoten und unregulierte Fischereipraktiken", result: false },
                    { answer: "Implementierung nachhaltiger Fischereipraktiken und Reduzierung von Plastikverschmutzung", result: true },
                    { answer: "Förderung von verschmutzenden Meeresaktivitäten", result: false }
                ]
            },
            {
                question: "Warum ist der Schutz der Meeresumwelt wichtig für das globale Ökosystem?",
                answers: [
                    { answer: "Förderung von schädlichen Praktiken in den Ozeanen", result: false },
                    { answer: "Weil die Ozeane eine Schlüsselrolle im Erhalt der Biodiversität und des Klimas spielen", result: true },
                    { answer: "Einschränkung des Zugangs zu Meeresressourcen", result: false }
                ]
            }
        ]
        
},
    {   number: 15,
        color: "var(--greenlime)",
        url: "url(../img/E-WEB-Goal-15.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Leben an Land'?",
                answers: [
                    { answer: "Förderung von Entwaldung und Zerstörung von Ökosystemen", result: false },
                    { answer: "Schutz, Wiederherstellung und nachhaltige Nutzung von Landökosystemen", result: true },
                    { answer: "Beschränkung des Zugangs zu Landressourcen", result: false }
                ]
            },
            {
                question: "Wie können Aufforstungsmaßnahmen und Naturschutzgebiete zur Erhaltung der Biodiversität beitragen?",
                answers: [
                    { answer: "Fortsetzung von Entwaldungspraktiken", result: false },
                    { answer: "Pflanzung von Bäumen und Schaffung von geschützten Lebensräumen", result: true },
                    { answer: "Förderung von Landdegradation", result: false }
                ]
            },
            {
                question: "Warum ist der nachhaltige Umgang mit Landressourcen entscheidend für das ökologische Gleichgewicht?",
                answers: [
                    { answer: "Förderung von umweltschädlichen Landnutzungspraktiken", result: false },
                    { answer: "Weil Landökosysteme die Grundlage für das Leben auf der Erde bilden", result: true },
                    { answer: "Einschränkung des Zugangs zu Land für landwirtschaftliche Zwecke", result: false }
                ]
            }
        ]
        
},
    {   number: 16,
        color: "var(--blueroyal)",
        url: "url(../img/E-WEB-Goal-16.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Frieden, Gerechtigkeit und starke Institutionen'?",
                answers: [
                    { answer: "Förderung von Konflikten und Schwächung von Institutionen", result: false },
                    { answer: "Förderung von Frieden, Gerechtigkeit und effektiven Institutionen", result: true },
                    { answer: "Beschränkung des Zugangs zu Gerechtigkeitssystemen", result: false }
                ]
            },
            {
                question: "Wie können transparente und gerechte Institutionen zur Verhinderung von Korruption beitragen?",
                answers: [
                    { answer: "Förderung und Akzeptanz von korrupten Praktiken", result: false },
                    { answer: "Implementierung von Transparenzmaßnahmen und unabhängigen Kontrollinstanzen", result: true },
                    { answer: "Ignorierung von Korruptionsbekämpfung", result: false }
                ]
            },
            {
                question: "Warum sind starke Institutionen entscheidend für die Förderung von Frieden und Gerechtigkeit?",
                answers: [
                    { answer: "Förderung von Schwäche und Instabilität in der Gesellschaft", result: false },
                    { answer: "Weil sie die Grundlage für gerechte und friedliche Gesellschaften bilden", result: true },
                    { answer: "Einschränkung des Zugangs zu Rechtssystemen", result: false }
                ]
            }
        ]
        
},
    {   number: 17,
        color: "var(--bluenavy)",
        url: "url(../img/E-WEB-Goal-17.png)",
        questions: [
            
            {
                question: "Was bedeutet 'Partnerschaften zur Erreichung der Ziele'?",
                answers: [
                    { answer: "Isolation und mangelnde Zusammenarbeit zwischen Ländern", result: false },
                    { answer: "Förderung von globaler Zusammenarbeit und Partnerschaften für nachhaltige Entwicklung", result: true },
                    { answer: "Beschränkung des Zugangs zu internationalen Kooperationen", result: false }
                ]
            },
            {
                question: "Wie können länderübergreifende Partnerschaften zur Lösung globaler Herausforderungen beitragen?",
                answers: [
                    { answer: "Förderung von isolierten nationalen Ansätzen", result: false },
                    { answer: "Förderung von gemeinsamen Anstrengungen, Ressourcenaustausch und Wissenstransfer", result: true },
                    { answer: "Einschränkung internationaler Kooperationen", result: false }
                ]
            },
            {
                question: "Warum ist die Zusammenarbeit zwischen Regierungen, Unternehmen und Zivilgesellschaft entscheidend für die nachhaltige Entwicklung?",
                answers: [
                    { answer: "Förderung von Konflikten zwischen verschiedenen Interessengruppen", result: false },
                    { answer: "Weil sie vielfältige Ressourcen und Perspektiven kombiniert, um wirksame Lösungen zu schaffen", result: true },
                    { answer: "Einschränkung des Zugangs zu zivilgesellschaftlicher Beteiligung", result: false }
                ]
            }
        ]
        
}
];


var playerTurnIndex = 0;
var sdgAvailableIndex = 0;
var sdgAvailableField = "";

function reloadWebsite() {
    location.reload(true);
}

function startGame(numberOfPlayers) {

    while (players.length > numberOfPlayers) {
        players.pop();
    }

    // set playerNumber
    playerNumber = numberOfPlayers;

    // create all player points on map
    setAllPlayerPoints();

    // set first sdg goal on map
    setSdgGoalOnMap();

    // hide foreground-container
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "none";
    var buttonContainer = document.getElementById("player-container");
    buttonContainer.style.display = "none";

}

function setAllPlayerPoints() {

    for (var i = 1; i <= playerNumber; i++) {
        generatePlayerPointsAsDiv(i, "F1");
    }

}

function generatePlayerPointsAsDiv(number, fieldId) {
    var newDiv = document.createElement("div");
    var div = document.getElementById(fieldId);
    newDiv.id = "player" + number;
    newDiv.className = "playerPoint";
    div.appendChild(newDiv);
}

function setSdgGoalOnMap() {

    var setOnThisFields = Array.from(allPossibleFields);

    for (var i = 0; i < playerNumber; i++) {
        var player = players[i];
        let valueToRemove = player.choosenPath[player.positionInArray];
        let indexToRemove = setOnThisFields.indexOf(valueToRemove);

        if (indexToRemove !== -1) {
            setOnThisFields.splice(indexToRemove, 1);
            console.log("Value removed:", valueToRemove);
        } else {
            console.log("Value not found in the array");
        }

        console.log(setOnThisFields);        
    }

    let randomIndex = Math.floor(Math.random() * setOnThisFields.length);
    sdgAvailableField = setOnThisFields[randomIndex];

    fieldWithSDG = sdgAvailableField;

    var fieldToPlaceSDG = document.getElementById(sdgAvailableField);
    console.log(sdgArray[sdgAvailableIndex].color);
    fieldToPlaceSDG.style.backgroundColor = sdgArray[sdgAvailableIndex].color;
    fieldToPlaceSDG.style.backgroundImage = sdgArray[sdgAvailableIndex].url;

    console.log(sdgAvailableField);
}

async function rollDice() {

    var buttonRollDice = document.getElementById("btn-roll-dice");
    buttonRollDice.style.display = "none";

    var resultDice = getRandomDiceNumber();
    showDiceAnimation(resultDice);

    setTimeout(() => {
        playerTurn(resultDice);
    }, 1000);
    
}

function showDiceAnimation(resultDice) {
    var dice = document.getElementById("cube-animation");
    // animation
    dice.className = 'show' + resultDice;
};

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}


async function playerTurn(resultDice) {
    showPlayboard();
    await movePlayerPoint(resultDice);
    setTimeout(showDiceContainer, 1000);
}

function showPlayboard() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "none";
    var diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "none";
}

function showDiceContainer() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "flex";
    var diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "flex";
    var buttonRollDice = document.getElementById("btn-roll-dice");
    buttonRollDice.style.display = "flex";
    var infoPlayerTurnText = document.getElementById("info-player-turn-text");
    infoPlayerTurnText.innerHTML = `Spieler:in ${playerTurnIndex + 1} ist dran!`;
}

async function movePlayerPoint(resultDice) {

    var player = players[playerTurnIndex];

    for (var i = 1; i <= resultDice; i++) {

        var playerPosition = player.choosenPath[player.positionInArray];

        if (playerPosition == "F1") {
            player.choosenPath = pathBig;
            player.positionInArray = 0;
        }

        if (playerPosition == "E5" || playerPosition == "A3") {
            var foregroundContainer = document.getElementById("foreground-container");
            foregroundContainer.style.display = "flex";
            var selectDirectionContainer = document.getElementById("select-direction-container");
            selectDirectionContainer.style.display = "flex";

            await waitOnSelectDirection(playerPosition, player);

            foregroundContainer.style.display = "none";
            selectDirectionContainer.style.display = "none";
        }

        player.positionInArray++;

        movePointByOneField(player);


        if (player.choosenPath[player.positionInArray] == fieldWithSDG) {
            await showQuestion();     
        }
        
    }    

    playerTurnIndex++;

    if (playerTurnIndex >= players.length) {
        playerTurnIndex = 0;
    }

}

async function showQuestion() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "flex";
    var qaContainer = document.getElementById("qa-container");
    qaContainer.style.display = "flex";
    await waitOnAnswer();
    if (isAnswerRight) {
        players[playerTurnIndex].sdgCards++;
        removeSDGOnMap();
        updatePlayerPoints();
        sdgAvailableIndex++;
        if (sdgAvailableIndex < 17) {
            setSdgGoalOnMap();
        } else {
            gameIsOver();
        }

    } else {
        alert("leider falsch du husssoooo!!! XD");
    }
    foregroundContainer.style.display = "none";
    qaContainer.style.display = "none";
}

function updatePlayerPoints() {
    var playerPoints1 = document.getElementById("points-player-1");
    var playerPoints2 = document.getElementById("points-player-2");
    var playerPoints3 = document.getElementById("points-player-3");
    var playerPoints4 = document.getElementById("points-player-4");

    for (var i = 0; i < players.length; i++) {
        if (i == 0) {
            playerPoints1.innerHTML = `${players[i].sdgCards} Points`;
        } else if (i == 1) {
            playerPoints2.innerHTML = `${players[i].sdgCards} Points`;
        } else if (i == 2) {
            playerPoints3.innerHTML = `${players[i].sdgCards} Points`;
        } else {
            playerPoints4.innerHTML = `${players[i].sdgCards} Points`;
        }
    }    
}

function gameIsOver() {
    // show game is over screen
    alert("Game isch over ;)");

    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "flex";

    var gameoverContainer = document.getElementById("gameover-container");
    gameoverContainer.style.display = "flex";
    



    checkWhichPlayerWon();
}

function checkWhichPlayerWon() {
    // vergleiche alle punkte uh zeige an wer gewonnen hat

    console.log("deh spieler het gwunne:");
    console.log(players);
    
}

function removeSDGOnMap() {
    var fieldToRemoveSDG = document.getElementById(sdgAvailableField);
    fieldToRemoveSDG.style.backgroundColor = "";
    fieldToRemoveSDG.style.backgroundImage = "";
}

function movePointByOneField(player) {

    var oldDiv = document.getElementById("player" + player.number);
    oldDiv.remove();


    var newDiv = document.createElement("div");

    var div = document.getElementById(player.choosenPath[player.positionInArray]);
    newDiv.id = "player" + player.number;
    newDiv.className = "playerPoint";
    div.appendChild(newDiv);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function randomSort(a, b) {
    return getRandomInt(-1, 1);
}

function waitOnAnswer() {

    var questionRandomIndex = Math.floor(Math.random() * 3);
    var answerRandomIndex = [0, 1, 2];
    answerRandomIndex.sort(randomSort);
    
    var questionText = document.getElementById("question-text");
    questionText.innerHTML = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].question;

    return new Promise(resolve => {
      const btnAnswer1 = document.getElementById("btn-answer-1");
      btnAnswer1.innerHTML = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[0]].answer;
      const btnAnswer2 = document.getElementById("btn-answer-2");
      btnAnswer2.innerHTML = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[1]].answer;
      const btnAnswer3 = document.getElementById("btn-answer-3");
      btnAnswer3.innerHTML = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[2]].answer;
  
      const btnAnswer1Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[0]].result;

        resolve();
      };

      const btnAnswer2Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[1]].result;

        resolve();
      };

      const btnAnswer3Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[2]].result;

        resolve();
      };

      btnAnswer1.addEventListener('click', btnAnswer1Func);
      btnAnswer2.addEventListener('click', btnAnswer2Func);
      btnAnswer3.addEventListener('click', btnAnswer3Func);
    });
  }

function waitOnSelectDirection(playerPosition, player) {
    return new Promise(resolve => {
      const leftIcon = document.getElementById("left-direction-icon");
      const rightIcon = document.getElementById("right-direction-icon");
  
      const selectedLeftSide = () => {
        leftIcon.removeEventListener('click', selectedLeftSide);
        rightIcon.removeEventListener('click', selectedRightSide);

        if (playerPosition == "E5") {
            player.choosenPath = pathShort;
        } else {
            player.choosenPath = pathMiddle;
        }

        resolve();
      };

      const selectedRightSide = () => {
        leftIcon.removeEventListener('click', selectedLeftSide);
        rightIcon.removeEventListener('click', selectedRightSide);

        resolve();
      }

      leftIcon.addEventListener('click', selectedLeftSide);
      rightIcon.addEventListener('click', selectedRightSide);
    });
  }


