# KIDDASH API
> This is an API that allows user to register and require the type of subject and it questions to be answered

## Register
> This allows new user to be register 
 - **ENDPOINT :** `https://kiddashs.herokuapp.com/api/v1/register`
 - **METHOD :** `POST`
 - **PARAMETERS:** 
 ```JSON
 {
     "username" : "sirP",
     "email":"prince1@gmail.com",
     "password":"prince12345"
 }
 ```
 - Response:
 ```Json
 {
     "status": "Successful",
    "User": {
        "_id": "5f575a50ee827e0017f9ba02",
        "username": "sirP",
        "email": "prince1@gmail.com",
        "__v": 0
    },
    "Register_Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpclAiLCJlbWFpbCI6InByaW5jZTFAZ21haWwuY29tIiwiaWF0IjoxNTk5NTYwMjcyfQ.U5JqBHYF0pleB2arZMAIBaM5l2vVErTbpbR5rb3zDn0"
 }
 ```
 ## Login
 > This allows registered user to sign in to use the App
 - **ENDPOINT :** `https://kiddashs.herokuapp.com/api/v1/login`
 - **METHOD :** `POST`
 - **PARAMETERS :** 
 - Response
 ```json
 {
    "status": "Succesful",
    "Login_User": {
        "_id": "5f525ae0ce521900175567c3",
        "username": "sirP",
        "email": "prince@gmail.com",
        "password": "$2a$10$3UUsxQIeHaKZ1M8gniPMqeEWonoFVhIp7irFrQMRI8m9lSYk.qG3i",
        "__v": 0
    }
 }
```

## To Add New Computer Question
- **ENDPOINT :** `https://kiddashs.herokuapp.com/api/v1/computer`
- **METHOD** `POST`
- **PARAMETERS**
```json
{{
    "setQuestion":"Web pages are written using?",
    "category":"Computer",
    "choice":"Multiple",
    "level":"easy",
    "answers":[
        {
        "option":"(A) URL"
        
    },
    {
        "option":"(B) FTP"  
        
    },
    {
        "option":"(C) HTTP"
        
    },
    {
        "option":"(D) HTML",
        "isCorrect":true
       
    }
        ]
        
}
```
- Response
```json

{
    "status": "Successful",
    "output": {
        "_id": "5f5779b2f6a3760017222e74",
        "setQuestion": "Web pages are written using?",
        "category": "Computer",
        "choice": "Multiple",
        "level": "easy",
        "answers": [
            {
                "isCorrect": false,
                "_id": "5f5779b2f6a3760017222e75",
                "option": "(A) URL"
            },
            {
                "isCorrect": false,
                "_id": "5f5779b2f6a3760017222e76",
                "option": "(B) FTP"
            },
            {
                "isCorrect": false,
                "_id": "5f5779b2f6a3760017222e77",
                "option": "(C) HTTP"
            },
            {
                "isCorrect": true,
                "_id": "5f5779b2f6a3760017222e78",
                "option": "(D) HTML"
            }
        ],
        "__v": 0
    }
}
```
## Get all computer questions and answers by the limit of 4
- **ENDPOINT :** `https://kiddashs.herokuapp.com/api/v1/getcomputer`
- **METHOD :** `GET`
- Response
```json
{
    "status": "Sucessful",
    "output": [
        {
            "_id": "5f52a9d830700e001779ae5a",
            "setQuestion": "Web pages are written using?",
            "category": "Computer",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": false,
                    "_id": "5f52a9d830700e001779ae5b",
                    "option": "(A) URL"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52a9d830700e001779ae5c",
                    "option": "(B) FTP"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52a9d830700e001779ae5d",
                    "option": "(C) HTTP"
                },
                {
                    "isCorrect": true,
                    "_id": "5f52a9d830700e001779ae5e",
                    "option": "(D) HTML"
                }
            ],
            "__v": 0
        },
        {
            "_id": "5f52ac5b30700e001779ae5f",
            "setQuestion": "What does CPU stand for",
            "category": "Computer",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": true,
                    "_id": "5f52ac5b30700e001779ae60",
                    "option": "(A) Central Processing Unit"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52ac5b30700e001779ae61",
                    "option": "(B) Central Process Unit"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52ac5b30700e001779ae62",
                    "option": "(C) Computer Personal Unit"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52ac5b30700e001779ae63",
                    "option": "((D) Central Processor Unit"
                }
            ],
            "__v": 0
        },
        {
            "_id": "5f52b00f30700e001779ae64",
            "setQuestion": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
            "category": "Computer",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": false,
                    "_id": "5f52b00f30700e001779ae65",
                    "option": "(A) 512"
                },
                {
                    "isCorrect": true,
                    "_id": "5f52b00f30700e001779ae66",
                    "option": "(B) 1000"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52b00f30700e001779ae67",
                    "option": "(C) 1024"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52b00f30700e001779ae68",
                    "option": "(D) 500"
                }
            ],
            "__v": 0
        },
        {
            "_id": "5f52b25330700e001779ae69",
            "setQuestion": "Which computer hardware device provides an interface for all other connected devices to communicate?",
            "category": "Computer",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": false,
                    "_id": "5f52b25330700e001779ae6a",
                    "option": "(A) Random Access Memory"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52b25330700e001779ae6b",
                    "option": "(B) Hard Disk Drive"
                },
                {
                    "isCorrect": false,
                    "_id": "5f52b25330700e001779ae6c",
                    "option": "(C) (C) Central Processing Unit"
                },
                {
                    "isCorrect": true,
                    "_id": "5f52b25330700e001779ae6d",
                    "option": "(D) Motherboard"
                }
            ],
            "__v": 0
        }
    ]
}
```
## To Add Basic Science Question
- **ENDPOINT :** `https://kiddashs.herokuapp.com/api/v1/get-basic-science`

- **METHOD :** `POST`
- **PARAMETERS :**
```json
{
    "setQuestion":"What is the first element on the periodic table?",
    "category":"Basic Science",
    "choice":"Multiple",
    "level":"easy",
    "answers":[
        {
        "option":" (A)   Hydrogen",
        "isCorrect":true      
    },
    {
        "option":"(B)   Oxygen"
    },
    {
        "option":"(C)  Helium "
    },
    {
        "option":" (D)  Lithium "
    }
        ]       
}
```
- Response
```json
{
    "status": "Succesful",
    "output": {
        "_id": "5f57e92ada87280017def311",
        "setQuestion": "What is the first element on the periodic table?",
        "category": "Basic Science",
        "choice": "Multiple",
        "level": "easy",
        "answers": [
            {
                "isCorrect": true,
                "_id": "5f57e92ada87280017def312",
                "option": " (A)   Hydrogen"
            },
            {
                "isCorrect": false,
                "_id": "5f57e92ada87280017def313",
                "option": "(B)   Oxygen"
            },
            {
                "isCorrect": false,
                "_id": "5f57e92ada87280017def314",
                "option": "(C)  Helium "
            },
            {
                "isCorrect": false,
                "_id": "5f57e92ada87280017def315",
                "option": " (D)  Lithium "
            }
        ],
        "__v": 0
    }
}
```
## Fetch  all Basic Science questions and answers and display them 
- **ENDPOINT :** `https://kiddashs.herokuapp.com/api/v1/get-basic-science` 

- **METHOD :** `GET`
- Response
```json
{
    "status": "Successful",
    "results": [
        {
            "_id": "5f5535df094adb0017adf265",
            "setQuestion": "What is the speed of light in a vacuum?",
            "category": "Basic Science",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": false,
                    "_id": "5f5535df094adb0017adf266",
                    "option": " (A) 751,665,014,151 m/s"
                },
                {
                    "isCorrect": false,
                    "_id": "5f5535df094adb0017adf267",
                    "option": "(B)  308,215,043 m/s"
                },
                {
                    "isCorrect": true,
                    "_id": "5f5535df094adb0017adf268",
                    "option": "(C)  299,792,458 m/s"
                },
                {
                    "isCorrect": false,
                    "_id": "5f5535df094adb0017adf269",
                    "option": " (D) 50,461 m/s"
                }
            ],
            "__v": 0
        },
        {
            "_id": "5f5536b7094adb0017adf26a",
            "setQuestion": "Which Apollo mission was the first one to land on the Moon?",
            "category": "Basic Science",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": true,
                    "_id": "5f5536b7094adb0017adf26b",
                    "option": " (A)  Apollo 11"
                },
                {
                    "isCorrect": false,
                    "_id": "5f5536b7094adb0017adf26c",
                    "option": "(B)  Apollo 10"
                },
                {
                    "isCorrect": false,
                    "_id": "5f5536b7094adb0017adf26d",
                    "option": "(C)  Apollo 9"
                },
                {
                    "isCorrect": false,
                    "_id": "5f5536b7094adb0017adf26e",
                    "option": " (D)  Apollo 13"
                }
            ],
            "__v": 0
        },
        {
            "_id": "5f5539bd094adb0017adf26f",
            "setQuestion": "What is the hottest planet in the Solar System?",
            "category": "Basic Science",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": false,
                    "_id": "5f5539bd094adb0017adf270",
                    "option": " (A)   Jupiter"
                },
                {
                    "isCorrect": false,
                    "_id": "5f5539bd094adb0017adf271",
                    "option": "(B)   Mercury"
                },
                {
                    "isCorrect": true,
                    "_id": "5f5539bd094adb0017adf272",
                    "option": "(C)  Venus "
                },
                {
                    "isCorrect": false,
                    "_id": "5f5539bd094adb0017adf273",
                    "option": " (D)  Mars "
                }
            ],
            "__v": 0
        },
        {
            "_id": "5f553af9094adb0017adf274",
            "setQuestion": "What is the first element on the periodic table?",
            "category": "Basic Science",
            "choice": "Multiple",
            "level": "easy",
            "answers": [
                {
                    "isCorrect": true,
                    "_id": "5f553af9094adb0017adf275",
                    "option": " (A)   Hydrogen"
                },
                {
                    "isCorrect": false,
                    "_id": "5f553af9094adb0017adf276",
                    "option": "(B)   Oxygen"
                },
                {
                    "isCorrect": false,
                    "_id": "5f553af9094adb0017adf277",
                    "option": "(C)  Helium "
                },
                {
                    "isCorrect": false,
                    "_id": "5f553af9094adb0017adf278",
                    "option": " (D)  Lithium "
                }
            ],
            "__v": 0
        }
    ]
}