
var pathBig = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "A2", "A1", "B1", "C1", "D1", "E1", "F1"];
var pathMiddle = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "B3", "C3", "C2", "C1", "D1", "E1", "F1"];
var pathShort = ["F1", "F2", "F3", "F4", "F5", "E5", "D4", "C4", "C3", "C2", "C1", "D1", "E1", "F1"];
var allPossibleFields = ["A1", "A2", "A3", "A4", "A5", "B1", "B3", "B5", "B6", "C1", "C2", "C3", "C4", "C6", "D1", "D4", "D6", "E1", "E5", "E6", "F1", "F2", "F3", "F4", "F5"];

var playerNumber = 2;
var fieldWithSDG = "";
var isAnswerRight = false;
var diceNumber = 1;
var isGameOver = false;
var whichButtonClicked;

var players = [
    { color: "var(--red)", number: 1, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0, playerName: "Spieler:in 1" },
    { color: "var(--blueroyal)", number: 2, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0, playerName: "Spieler:in 2" },
    { color: "var(--greenlime)", number: 3, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0, playerName: "Spieler:in 3" },
    { color: "var(--magenta)", number: 4, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0, playerName: "Spieler:in 4" }
];

var pointsFieldsArray = [
    { classNameForDiv: "player-points red", classNameForP: "points-player", id: "points-player-1", pointNumber: "0", appendChildId: "D2" },
    { classNameForDiv: "player-points blue", classNameForP: "points-player", id: "points-player-2", pointNumber: "0", appendChildId: "D2" },
    { classNameForDiv: "player-points green", classNameForP: "points-player", id: "points-player-3", pointNumber: "0", appendChildId: "D3" },
    { classNameForDiv: "player-points magenta", classNameForP: "points-player", id: "points-player-4", pointNumber: "0", appendChildId: "D3" }
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
                    { answer: "Förderung nachhaltiger Anbaumethoden", result: true },
                    { answer: "Einsatz von Gentechnik zur Monopolbildung", result: false },
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
                    { answer: "Verbesserung der Lebensqualität", result: true },
                    { answer: "Förderung von Krankheitsausbreitung", result: false },
                    { answer: "Steigerung der Gesundheitskosten", result: false }
                ]
            },
            {
                question: "Wie können Gesundheitssysteme verbessert werden, um sowohl die Prävention als auch die Behandlung von Krankheiten zu fördern?",
                answers: [
                    { answer: "Reduzierung von Impfprogrammen", result: false },
                    { answer: "Erhöhung von Tabakkonsum", result: false },
                    { answer: "Förderung von Bildung über Hygiene", result: true }
                ]
            },
            {
                question: "Wie können kulturelle, sozioökonomische Faktoren die Gesundheit beeinflussen, und wie können Ungleichheiten in diesem Bereich verringert werden?",
                answers: [
                    { answer: "Förderung von kulturellen Praktiken, die die Gesundheit gefährden", result: false },
                    { answer: "Erzwungene Assimilation in der Gesundheitspflege", result: false },
                    { answer: "Berücksichtigung kultureller Vielfalt bei der Gesundheitsplanung", result: true }
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
                    { answer: "Förderung von Online-Lernplattformen", result: true },
                    { answer: "Verringerung von Bildungsbudgets", result: false },
                    { answer: "Erhöhung der Schulgebühren", result: false }
                ]
            },
            {
                question: "Welche Rolle spielt Bildung bei der Förderung von Geschlechtergleichstellung?",
                answers: [
                    { answer: "Begrenzung des Bildungszugangs für Frauen", result: false },
                    { answer: "Frauenförderung durch wirtschaftliche Benachteiligung", result: false },
                    { answer: "Stärkung von Frauen durch Bildung", result: true }
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
                    { answer: "Gleichberechtigung der Geschlechter", result: true },
                    { answer: "Förderung von Geschlechterunterschieden", result: false },
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
                    { answer: "Einschränkung der Bildungsmöglichkeiten für Mädchen", result: false },
                    { answer: "Förderung von Vielfalt und Selbstbestimmung", result: true }
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
                    { answer: "Implementierung von Wasseraufbereitungssystemen", result: true },
                    { answer: "Verschwendung von Wasserressourcen", result: false },
                    { answer: "Förderung von umweltschädlichen Praktiken", result: false }
                ]
            },
            {
                question: "Wie können Wasserknappheit und Wasserverschmutzung global angegangen werden?",
                answers: [
                    { answer: "Ignorierung internationaler Umweltabkommen", result: false },
                    { answer: "Steigerung der industriellen Wasserverschmutzung", result: false },
                    { answer: "Förderung von nachhaltigen Wassermanagementpraktiken", result: true }
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
                    { answer: "Begrenzung des Zugangs zu umweltfreundlichen Energien", result: false },
                    { answer: "Förderung von Solarenergie, Windkraft und anderen erneuerbaren Quellen", result: true }
                ]
            },
            {
                question: "Wie können Energieeffizienz und Nachhaltigkeit in städtischen Gebieten verbessert werden?",
                answers: [
                    { answer: "Implementierung von grüner Infrastruktur und Energieeffizienzmaßnahmen", result: true },
                    { answer: "Vernachlässigung städtischer Umweltauswirkungen", result: false },
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
                    { answer: "Begrenzung des Zugangs zu Arbeitsmöglichkeiten", result: false },
                    { answer: "Sicherstellung fairer Arbeitsbedingungen und Wirtschaftswachstum", result: true }
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
                    { answer: "Beschränkung des Marktzugangs für kleine Unternehmen", result: false },
                    { answer: "Förderung von kleinen Unternehmen und sozial verantwortlichen Geschäftspraktiken", result: true }
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
                    { answer: "Entwicklung moderner Technologien und Infrastrukturen", result: true },
                    { answer: "Förderung veralteter Technologien", result: false },
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
                    { answer: "Förderung von umweltschädlichen Infrastrukturprojekten", result: false },
                    { answer: "Integration von Umweltauflagen und nachhaltigen Baupraktiken", result: true }
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
                    { answer: "Begrenzung des Zugangs zu Chancen", result: false },
                    { answer: "Verringerung von Ungleichheiten in Einkommen und Rechten", result: true }
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
                    { answer: "Entwicklung von Städten, die Umweltauswirkungen minimieren", result: true },
                    { answer: "Förderung von umweltzerstörenden Bauprojekten", result: false },
                    { answer: "Einschränkung des Zugangs zu städtischer Infrastruktur", result: false }
                ]
            },
            {
                question: "Wie können Städte umweltfreundlicher gestaltet werden, um nachhaltige Entwicklung zu fördern?",
                answers: [
                    { answer: "Förderung von umweltbelastenden Industrien in städtischen Gebieten", result: false },
                    { answer: "Begrenzung des öffentlichen Zugangs zu grünen Bereichen", result: false },
                    { answer: "Integration von Grünflächen und nachhaltigen Verkehrsmitteln", result: true }
                ]
            },
            {
                question: "Warum ist die Förderung von nachhaltigen Städten wichtig für die Umwelt und die Lebensqualität der Menschen?",
                answers: [
                    { answer: "Förderung von Umweltverschmutzung und übermäßigem Ressourcenverbrauch", result: false },
                    { answer: "Einschränkung des Zugangs zu städtischen Annehmlichkeiten", result: false },
                    { answer: "Verbesserung der Luft- und Wasserqualität, Reduzierung von Verkehrsstaus", result: true }
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
                    { answer: "Nachhaltige Produktion und Konsumgewohnheiten", result: true },
                    { answer: "Förderung von verschwenderischem Konsumverhalten", result: false },
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
                    { answer: "Verringerung negativer Umweltauswirkungen und Erhaltung natürlicher Ressourcen", result: true },
                    { answer: "Förderung von Umweltverschmutzung und Ressourcenausbeutung", result: false },
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
                    { answer: "Beschränkung des Zugangs zu umweltfreundlichen Technologien", result: false },
                    { answer: "Aktivitäten zur Reduzierung von Treibhausgasemissionen", result: true }
                ]
            },
            {
                question: "Wie können Regierungen und Unternehmen zur Verringerung der Klimaauswirkungen beitragen?",
                answers: [
                    { answer: "Förderung von Kohle- und Erdölgewinnung", result: false },
                    { answer: "Ignorierung von Umweltauflagen", result: false },
                    { answer: "Umstellung auf erneuerbare Energien und nachhaltige Praktiken", result: true }
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
                    { answer: "Förderung von verschmutzenden Meeresaktivitäten", result: false },
                    { answer: "Implementierung nachhaltiger Fischereipraktiken und Reduzierung von Plastikverschmutzung", result: true }
                ]
            },
            {
                question: "Warum ist der Schutz der Meeresumwelt wichtig für das globale Ökosystem?",
                answers: [
                    { answer: "Weil die Ozeane eine Schlüsselrolle im Erhalt der Biodiversität und des Klimas spielen", result: true },
                    { answer: "Förderung von schädlichen Praktiken in den Ozeanen", result: false },
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
                    { answer: "Pflanzung von Bäumen und Schaffung von geschützten Lebensräumen", result: true },
                    { answer: "Fortsetzung von Entwaldungspraktiken", result: false },
                    { answer: "Förderung von Landdegradation", result: false }
                ]
            },
            {
                question: "Warum ist der nachhaltige Umgang mit Landressourcen entscheidend für das ökologische Gleichgewicht?",
                answers: [
                    { answer: "Weil Landökosysteme die Grundlage für das Leben auf der Erde bilden", result: true },
                    { answer: "Förderung von umweltschädlichen Landnutzungspraktiken", result: false },
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
                    { answer: "Beschränkung des Zugangs zu Gerechtigkeitssystemen", result: false },
                    { answer: "Förderung von Frieden, Gerechtigkeit und effektiven Institutionen", result: true }
                ]
            },
            {
                question: "Wie können transparente und gerechte Institutionen zur Verhinderung von Korruption beitragen?",
                answers: [
                    { answer: "Förderung und Akzeptanz von korrupten Praktiken", result: false },
                    { answer: "Ignorierung von Korruptionsbekämpfung", result: false },
                    { answer: "Implementierung von Transparenzmaßnahmen und unabhängigen Kontrollinstanzen", result: true }
                ]
            },
            {
                question: "Warum sind starke Institutionen entscheidend für die Förderung von Frieden und Gerechtigkeit?",
                answers: [
                    { answer: "Weil sie die Grundlage für gerechte und friedliche Gesellschaften bilden", result: true },
                    { answer: "Förderung von Schwäche und Instabilität in der Gesellschaft", result: false },
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
                    { answer: "Beschränkung des Zugangs zu internationalen Kooperationen", result: false },
                    { answer: "Förderung von globaler Zusammenarbeit und Partnerschaften für nachhaltige Entwicklung", result: true }
                ]
            },
            {
                question: "Wie können länderübergreifende Partnerschaften zur Lösung globaler Herausforderungen beitragen?",
                answers: [
                    { answer: "Förderung von isolierten nationalen Ansätzen", result: false },
                    { answer: "Einschränkung internationaler Kooperationen", result: false },
                    { answer: "Förderung von gemeinsamen Anstrengungen, Ressourcenaustausch und Wissenstransfer", result: true }
                ]
            },
            {
                question: "Warum ist die Zusammenarbeit zwischen Regierungen, Unternehmen und Zivilgesellschaft entscheidend für die nachhaltige Entwicklung?",
                answers: [
                    { answer: "Weil sie vielfältige Ressourcen und Perspektiven kombiniert, um wirksame Lösungen zu schaffen", result: true },
                    { answer: "Förderung von Konflikten zwischen verschiedenen Interessengruppen", result: false },
                    { answer: "Einschränkung des Zugangs zu zivilgesellschaftlicher Beteiligung", result: false }
                ]
            }
        ]
        
}
];

// get html elements
var foregroundContainer = document.getElementById("foreground-container");
var playerContainer = document.getElementById("player-container");
var buttonRollDice = document.getElementById("btn-roll-dice");
var diceContainer = document.getElementById("dice-container");
var dice = document.getElementById("cube-animation");
var infoPlayerTurnText = document.getElementById("info-player-turn-text");
var qaContainer = document.getElementById("qa-container");
var selectDirectionContainerA3 = document.getElementById("select-direction-container-a3");
var selectDirectionContainerE5 = document.getElementById("select-direction-container-e5");
var gameoverContainer = document.getElementById("gameover-container");
const btnAnswer1 = document.getElementById("btn-answer-1");
const btnAnswer2 = document.getElementById("btn-answer-2");
const btnAnswer3 = document.getElementById("btn-answer-3");

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

    changeNameOfPlayers();

    // create all player points on map
    setAllPlayerPoints();

    // set first sdg goal on map
    setSdgGoalOnMap();

    // hide foreground-container
    foregroundContainer.style.display = "none";
    playerContainer.style.display = "none";
}

function changeNameOfPlayers() {
    for (let i = 0; i < players.length; i++) {
        let playerName = "";

        while (!playerName.trim() || playerName.length > 15) {
            playerName = customPrompt("Wie lautet der Name von Spieler:in " + (i + 1) + "? (Maximal 15 Zeichen)", `${players[i].playerName}`);
            if (playerName.length > 15) {
                alert('Die Eingabe darf nicht mehr als 15 Zeichen haben. Bitte geben Sie einen kürzeren Wert ein.');
            }
        }

        players[i].playerName = playerName;

        console.log("Player " + (i + 1) + "'s name:", playerName);
    }
}

function customPrompt(message, defaultValue) {
    var sanitizedDefault = document.createElement('div');
    sanitizedDefault.innerText = defaultValue;

    var userInput = prompt(message, sanitizedDefault.innerText);

    if (userInput && (userInput.includes('<') || userInput.length > 15)) {
        alert('Ungültige Eingabe. Bitte geben Sie einen gültigen Wert ein. (Max. 15 Zeichen)');
        return customPrompt(message, defaultValue);
    }

    return userInput;
}


function setAllPlayerPoints() {

    for (var i = 1; i <= playerNumber; i++) {
        generatePlayerPointsAsDiv(i, "F1");
        generatePointsFields(i);
    }

}

function generatePlayerPointsAsDiv(number, fieldId) {
    var newDiv = document.createElement("div");
    var div = document.getElementById(fieldId);
    newDiv.id = "player" + number;
    newDiv.className = "playerPoint";
    div.appendChild(newDiv);
}


function generatePointsFields(number) {
    infosForHtmlElements = pointsFieldsArray[number-1];
    playerInfos = players[number-1];
    var divToAppendChild = document.getElementById(infosForHtmlElements.appendChildId);
    var pointsFieldDiv = document.createElement("div");
    pointsFieldDiv.className = infosForHtmlElements.classNameForDiv;

    var playerName = document.createElement("h4");
    playerName.textContent = playerInfos.playerName;

    var playerPoints = document.createElement("p");
    playerPoints.id = infosForHtmlElements.id;
    playerPoints.className = infosForHtmlElements.classNameForP;
    playerPoints.textContent = infosForHtmlElements.pointNumber;

    var pointsText = document.createElement("h5");
    pointsText.textContent = "Punkte";

    pointsFieldDiv.appendChild(playerName);
    pointsFieldDiv.appendChild(playerPoints);
    pointsFieldDiv.appendChild(pointsText);

    divToAppendChild.appendChild(pointsFieldDiv);
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
    fieldToPlaceSDG.style.backgroundColor = sdgArray[sdgAvailableIndex].color;
    fieldToPlaceSDG.style.backgroundImage = sdgArray[sdgAvailableIndex].url;

    var divChangeArrowLook = document.getElementById(sdgAvailableField);
    var iElements = divChangeArrowLook.querySelectorAll('i');

    iElements.forEach(function (iElement) {
        iElement.style.color = 'transparent';
    });
}

async function rollDice() {
    buttonRollDice.style.display = "none";

    var resultDice = getRandomDiceNumber();
    showDiceAnimation(resultDice);

    setTimeout(() => {
        playerTurn(resultDice);
    }, 1000);
    
}

function showDiceAnimation(resultDice) {
    dice.className = 'show' + resultDice;
};

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}


async function playerTurn(resultDice) {
    showPlayboard();
    await movePlayerPoint(resultDice);
}

function showPlayboard() {
    foregroundContainer.style.display = "none";
    diceContainer.style.display = "none";
}

function showDiceContainer() {
    foregroundContainer.style.display = "flex";
    diceContainer.style.display = "flex";
    buttonRollDice.style.display = "flex";
    playerInfos = players[playerTurnIndex];
    infoPlayerTurnText.innerHTML = `${playerInfos.playerName} ist dran!`;
}

async function movePlayerPoint(resultDice) {

    var player = players[playerTurnIndex];

    for (var i = 1; i <= resultDice; i++) {

        var playerPosition = player.choosenPath[player.positionInArray];

        if (playerPosition == "F1") {
            player.choosenPath = pathBig;
            player.positionInArray = 0;
        }

        if (playerPosition == "E5") {
            foregroundContainer.style.display = "flex";
            selectDirectionContainerE5.style.display = "flex";

            await waitOnSelectDirection(playerPosition, player);

            foregroundContainer.style.display = "none";
            selectDirectionContainerE5.style.display = "none";
            
        }

        if (playerPosition == "A3") {
            foregroundContainer.style.display = "flex";
            selectDirectionContainerA3.style.display = "flex";

            await waitOnSelectDirection(playerPosition, player);

            foregroundContainer.style.display = "none";
            selectDirectionContainerA3.style.display = "none";
        }

        player.positionInArray++;

        movePointByOneField(player);


        if (player.choosenPath[player.positionInArray] == fieldWithSDG) {
            await showQuestion();
            
            if (isGameOver) {
                i = 100;
            }
        }
        
    }    

    playerTurnIndex++;

    if (playerTurnIndex >= players.length) {
        playerTurnIndex = 0;
    }

    var diceColorButton = document.getElementById("dice");
    diceColorButton.style.backgroundColor = players[playerTurnIndex].color;

}

async function showQuestion() {
    foregroundContainer.style.display = "flex";
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
            isGameOver = true;
        }

    } else {
        btnAnswer1.classList.remove("btn-wrong");
        btnAnswer2.classList.remove("btn-wrong");
        btnAnswer3.classList.remove("btn-wrong");
    }

    if (!isGameOver) {
        foregroundContainer.style.display = "none";
    }
    qaContainer.style.display = "none";
}

function updatePlayerPoints() {
    var playerPoints1 = document.getElementById("points-player-1");
    var playerPoints2 = document.getElementById("points-player-2");
    var playerPoints3 = document.getElementById("points-player-3");
    var playerPoints4 = document.getElementById("points-player-4");

    for (var i = 0; i < players.length; i++) {
        if (i == 0) {
            playerPoints1.innerHTML = players[i].sdgCards;
        } else if (i == 1) {
            playerPoints2.innerHTML = players[i].sdgCards;
        } else if (i == 2) {
            playerPoints3.innerHTML = players[i].sdgCards;
        } else {
            playerPoints4.innerHTML = players[i].sdgCards;
        }
    }    
}

function gameIsOver() {
    // show game is over screen
    selectDirectionContainerA3.style.display = "none";
    selectDirectionContainerE5.style.display = "none";
    foregroundContainer.style.display = "flex";
    gameoverContainer.style.display = "flex";
    checkWhichPlayerWon();
}

function checkWhichPlayerWon() {

    var gameoverText = document.getElementById("gameover-text");
    let playerWithMostSdgCards = players[0];
    let tiedPlayers = [playerWithMostSdgCards];


    for (let i = 1; i < players.length; i++) {

        if (players[i].sdgCards > playerWithMostSdgCards.sdgCards) {
            playerWithMostSdgCards = players[i];
            tiedPlayers = [playerWithMostSdgCards];
        } else if (players[i].sdgCards === playerWithMostSdgCards.sdgCards) {
            tiedPlayers.push(players[i]);
        }
    }

    if (tiedPlayers.length > 1) {
        gameoverText.innerHTML = `Es gab ein Unentschieden!`;
    } else {

        gameoverText.innerHTML = `${playerWithMostSdgCards.playerName} hat gewonnen!`;
    }

    
}

function removeSDGOnMap() {
    var fieldToRemoveSDG = document.getElementById(sdgAvailableField);
    fieldToRemoveSDG.style.backgroundColor = "";
    fieldToRemoveSDG.style.backgroundImage = "";

    var divChangeArrowLook = document.getElementById(sdgAvailableField);
    var iElements = divChangeArrowLook.querySelectorAll('i');

    iElements.forEach(function (iElement) {
        iElement.style.color = 'var(--greendark)';
    });
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
      btnAnswer1.innerHTML = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[0]].answer;
      btnAnswer2.innerHTML = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[1]].answer;
      btnAnswer3.innerHTML = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[2]].answer;
  
      const btnAnswer1Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        whichButtonClicked = btnAnswer1;
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[0]].result;

        if (!isAnswerRight) {
            btnAnswer1.classList.add("btn-wrong");
            setTimeout(resolve, 2000);
        } else {
            resolve();
        }
      };

      const btnAnswer2Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        whichButtonClicked = btnAnswer2;
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[1]].result;

        if (!isAnswerRight) {
            btnAnswer2.classList.add("btn-wrong");
            setTimeout(resolve, 2000);
        } else {
            resolve();
        }
      };

      const btnAnswer3Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        whichButtonClicked = btnAnswer3;
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[questionRandomIndex].answers[answerRandomIndex[2]].result;

        if (!isAnswerRight) {
            btnAnswer3.classList.add("btn-wrong");
            setTimeout(resolve, 2000);
        } else {
            resolve();
        }
      };

      btnAnswer1.addEventListener('click', btnAnswer1Func);
      btnAnswer2.addEventListener('click', btnAnswer2Func);
      btnAnswer3.addEventListener('click', btnAnswer3Func);
    });
  }

function waitOnSelectDirection(playerPosition, player) {
    return new Promise(resolve => {
      const upLeftIcon = document.getElementById("upleft-direction-icon");
      const rightIcon = document.getElementById("right-direction-icon");

      const leftIcon = document.getElementById("left-direction-icon");
      const downIcon = document.getElementById("down-direction-icon");
      
      const selectedNewPath = () => {
        upLeftIcon.removeEventListener('click', selectedNewPath);
        rightIcon.removeEventListener('click', selectedOldPath);
        leftIcon.removeEventListener('click', selectedOldPath);
        downIcon.removeEventListener('click', selectedNewPath);

        if (playerPosition == "E5") {
            player.choosenPath = pathShort;
        } else {
            player.choosenPath = pathMiddle;
        }

        resolve();
      };

      const selectedOldPath = () => {
        upLeftIcon.removeEventListener('click', selectedNewPath);
        rightIcon.removeEventListener('click', selectedOldPath);
        leftIcon.removeEventListener('click', selectedOldPath);
        downIcon.removeEventListener('click', selectedNewPath);

        resolve();
      }

      upLeftIcon.addEventListener('click', selectedNewPath);
      rightIcon.addEventListener('click', selectedOldPath);

      leftIcon.addEventListener('click', selectedOldPath);
      downIcon.addEventListener('click', selectedNewPath);
      
    });
  }
