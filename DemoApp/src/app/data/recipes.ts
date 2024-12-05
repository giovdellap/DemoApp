import { Recipe } from "../model/recipe";

export const mockRecipes: Recipe[] = [
    {
        "id": 1,
        "name": "Pancake",
        "date": new Date("2024-12-04T22:48:05.218Z"),
        "ingredients": [
            {
                "name": "Farina 00",
                "quantity": "125g"
            },
            {
                "name": "Burro",
                "quantity": "25g"
            },
            {
                "name": "Uova",
                "quantity": "2"
            },
            {
                "name": "Latte intero",
                "quantity": "200g"
            },
            {
                "name": "Zucchero",
                "quantity": "15g"
            },
            {
                "name": "Lievito per dolci",
                "quantity": "6g"
            },
            {
                "name": "Sale fino",
                "quantity": "1 pizzico"
            }
        ],
        "procedure": "Per realizzare i pancake per prima cosa fate sciogliere il burro in un pentolino e lasciate intiepidire, poi separate i tuorli dagli albumi.\nVersate nella ciotola con i tuorli il burro fuso intiepidito e il latte. \nMescolate con una frusta, poi unite la farina setacciata. \nSetacciate anche il lievito 4 e incorporate le polveri con la frusta, poi aggiungete il sale e mescolate ancora per ottenere un composto omogeneo. \nOra prendete la ciotola con gli albumi e iniziate a montarli con le fruste elettriche ."
    },
    {
        "id": 2,
        "name": "Spaghetti alla carbonara",
        "date": new Date("2024-12-02T22:48:05.218Z"),
        "ingredients": [
            {
                "name": "Spaghetti",
                "quantity": "320g"
            },
            {
                "name": "Uova",
                "quantity": "6"
            },
            {
                "name": "Guanciale",
                "quantity": "150g"
            },
            {
                "name": "Pecorino",
                "quantity": "50g"
            },
            {
                "name": "Pepe",
                "quantity": "q.b."
            }
        ],
        "procedure": "Per preparare gli spaghetti alla carbonara cominciate mettendo sul fuoco una pentola con l’acqua salata per cuocere la pasta. \nNel frattempo eliminate la cotenna dal guanciale e tagliatelo prima a fette e poi a striscioline spesse circa 1cm. \nLa cotenna avanzata potrà essere riutilizzata per insaporire altre preparazioni.\nVersate i pezzetti di guanciale in una padella antiaderente e rosolate per circa 10 minuti a fiamma medio alta, fate attenzione a non bruciarlo altrimenti rilascerà un aroma troppo forte. \nNel frattempo tuffate gli spaghetti nell’acqua bollente e cuoceteli al dente. Intanto versate i tuorli in una ciotola."
    },
    {
        "id": 3,
        "name": "Spaghetti all'amatriciana",
        "date": new Date("2024-12-03T22:48:05.218Z"),
        "ingredients": [
            {
                "name": "Spaghetti",
                "quantity": "320g"
            },
            {
                "name": "Guanciale",
                "quantity": "150g"
            },
            {
                "name": "Pomodori pelati",
                "quantity": "400g"
            },
            {
                "name": "Pecorino",
                "quantity": "75g"
            },
            {
                "name": "Vino bianco",
                "quantity": "50g"
            },
            {
                "name": "Sale fino",
                "quantity": "q.b."
            }
        ],
        "procedure": "Per preparare gli spaghetti all’amatriciana, per prima cosa mettete a bollire l'acqua per la cottura della pasta da salare poi a bollore. Potete quindi dedicarvi al condimento: prendete il guanciale, eliminate la cotenna e tagliatelo a fette di circa 1 cm di spessore. \nRiducete le fette a listarelle di circa mezzo cm. Fatelo rosolare a fiamma bassa per 7-8 minuti in una padella di ferro oppure di acciaio. \nIl grasso del guanciale dovrà diventare trasparente e la carne croccante."
    }
]