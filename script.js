let availableFish = [];


let fxn = function() {
  	let today = new Date();
  	let time = today.getMonth() + "/" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  

  	document.getElementById('time').innerHTML = time;
}
setInterval(fxn, 1000);

let fish = function() {
  	let today = new Date();
  	let month = today.getMonth() + 1;
  	let hour = today.getHours();
 	
  	for(fish in fishes){
  		if(fishes[fish].months.northern.array.includes(month) && fishes[fish].times.array.includes(hour)){
  			availableFish.push(fishes[fish].name);
  		}
  	}

  	document.getElementById('fish').innerHTML = availableFish;
}



let fishes = [
    {
        "id": 1,
        "name": "Bitterling",
        "location": "River",
        "shadow_size": "Smallest",
        "price": 900,
        "times": {
            "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            "text": "All Day"
        },
        "months": {
            "northern": {
                "array": [1, 2, 3, 11, 12],
                "text": "November - March"
            },
            "southern": {
                "array": [5, 6, 7, 8, 9],
                "text": "May - September"
            }
        }
    },
    {
        "id": 2,
        "name": "Pale Chub",
        "location": "River",
        "shadow_size": "Smallest",
        "price": 160,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 3,
        "name": "Crucian Carp",
        "location": "River",
        "shadow_size": "Small",
        "price": 160,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 4,
        "name": "Dace",
        "location": "River",
        "shadow_size": "Medium",
        "price": 240,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 5,
        "name": "Carp",
        "location": "Pond",
        "shadow_size": "Large",
        "price": 300,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 6,
        "name": "Koi",
        "location": "Pond",
        "shadow_size": "Large",
        "price": 4000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 7,
        "name": "Goldfish",
        "location": "Pond",
        "shadow_size": "Smallest",
        "price": 1300,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 8,
        "name": "Pop-eyed Goldfish",
        "location": "Pond",
        "shadow_size": "Smallest",
        "price": 1300,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 9,
        "name": "Ranchu Goldfish",
        "location": "Pond",
        "shadow_size": "Small",
        "price": 4500,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 10,
        "name": "Killifish",
        "location": "Pond",
        "shadow_size": "Smallest",
        "price": 300,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                "text": "April - August"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - February"
            }
        }
    },
    {
        "id": 11,
        "name": "Crawfish",
        "location": "Pond",
        "shadow_size": "Small",
        "price": 200,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "April - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - March"
            }
        }
    },
    {
        "id": 12,
        "name": "Soft-shelled Turtle",
        "location": "River",
        "shadow_size": "Large",
        "price": 3750,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    8,
                    9
                ],
                "text": "August - September"
            },
            "southern": {
                "array": [
                    2,
                    3
                ],
                "text": "February - March"
            }
        }
    },
    {
        "id": 13,
        "name": "Snapping Turtle",
        "location": "River",
        "shadow_size": "Extra Large",
        "price": 5000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "9 a.m. - 4 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "April - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - April"
            }
        }
    },
    {
        "id": 14,
        "name": "Tadpole",
        "location": "Pond",
        "shadow_size": "Smallest",
        "price": 100,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                "text": "March - July"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "September - January"
            }
        }
    },
    {
        "id": 15,
        "name": "Frog",
        "location": "Pond",
        "shadow_size": "Small",
        "price": 120,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8
                ],
                "text": "May - August"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - February"
            }
        }
    },
    {
        "id": 16,
        "name": "Freshwater Goby",
        "location": "River",
        "shadow_size": "Small",
        "price": 400,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 17,
        "name": "Loach",
        "location": "River",
        "shadow_size": "Small",
        "price": 400,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    3,
                    4,
                    5
                ],
                "text": "March - May"
            },
            "southern": {
                "array": [
                    9,
                    10,
                    11
                ],
                "text": "September - November"
            }
        }
    },
    {
        "id": 18,
        "name": "Catfish",
        "location": "Pond",
        "shadow_size": "Large",
        "price": 800,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "May - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - April"
            }
        }
    },
    {
        "id": 19,
        "name": "Giant Snakehead",
        "location": "Pond",
        "shadow_size": "Extra Large",
        "price": 5500,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8
                ],
                "text": "June - August"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - February"
            }
        }
    },
    {
        "id": 20,
        "name": "Bluegill",
        "location": "River",
        "shadow_size": "Small",
        "price": 180,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 21,
        "name": "Yellow Perch",
        "location": "River",
        "shadow_size": "Medium",
        "price": 300,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - March"
            },
            "southern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "April - September"
            }
        }
    },
    {
        "id": 22,
        "name": "Black Bass",
        "location": "River",
        "shadow_size": "Large",
        "price": 400,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 23,
        "name": "Tilapia",
        "location": "River",
        "shadow_size": "Medium",
        "price": 800,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "June - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - April"
            }
        }
    },
    {
        "id": 24,
        "name": "Pike",
        "location": "River",
        "shadow_size": "Extra Large",
        "price": 1800,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    9,
                    10,
                    11,
                    12
                ],
                "text": "September - December"
            },
            "southern": {
                "array": [
                    3,
                    4,
                    5,
                    6
                ],
                "text": "March - June"
            }
        }
    },
    {
        "id": 25,
        "name": "Pond Smelt",
        "location": "River",
        "shadow_size": "Small",
        "price": 500,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - February"
            },
            "southern": {
                "array": [
                    6,
                    7,
                    8
                ],
                "text": "June - August"
            }
        }
    },
    {
        "id": 26,
        "name": "Sweetfish",
        "location": "River",
        "shadow_size": "Medium",
        "price": 900,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    7,
                    8,
                    9
                ],
                "text": "July - September"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3
                ],
                "text": "January - March"
            }
        }
    },
    {
        "id": 27,
        "name": "Cherry Salmon",
        "location": "River (Clifftop)",
        "shadow_size": "Medium",
        "price": 1000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    3,
                    4,
                    5,
                    6,
                    9,
                    10,
                    11
                ],
                "text": "March - June, September - November"
            },
            "southern": {
                "array": [
                    3,
                    4,
                    5,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "March - May, September - December"
            }
        }
    },
    {
        "id": 28,
        "name": "Char",
        "location": "River (Clifftop)\/Pond",
        "shadow_size": "Medium",
        "price": 3800,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    3,
                    4,
                    5,
                    6,
                    9,
                    10,
                    11
                ],
                "text": "March - June, September - November"
            },
            "southern": {
                "array": [
                    3,
                    4,
                    5,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "March - May, September - December"
            }
        }
    },
    {
        "id": 29,
        "name": "Golden Trout",
        "location": "River (Clifftop)",
        "shadow_size": "Medium",
        "price": 15000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    3,
                    4,
                    5,
                    6,
                    9,
                    10,
                    11
                ],
                "text": "March - June, September - November"
            },
            "southern": {
                "array": [
                    3,
                    4,
                    5,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "March - May, September - December"
            }
        }
    },
    {
        "id": 30,
        "name": "Stringfish",
        "location": "River (Clifftop)",
        "shadow_size": "Largest",
        "price": 15000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            },
            "southern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            }
        }
    },
    {
        "id": 31,
        "name": "Salmon",
        "location": "River (mouth)",
        "shadow_size": "Small",
        "price": 700,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    9
                ],
                "text": "September"
            },
            "southern": {
                "array": [
                    3
                ],
                "text": "March"
            }
        }
    },
    {
        "id": 32,
        "name": "King Salmon",
        "location": "River (mouth)",
        "shadow_size": "Smallest",
        "price": 1800,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    9
                ],
                "text": "September"
            },
            "southern": {
                "array": [
                    3
                ],
                "text": "March"
            }
        }
    },
    {
        "id": 33,
        "name": "Mitten Crab",
        "location": "River",
        "shadow_size": "Small",
        "price": 2000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    9,
                    10,
                    11
                ],
                "text": "September - November"
            },
            "southern": {
                "array": [
                    3,
                    4,
                    5
                ],
                "text": "March - May"
            }
        }
    },
    {
        "id": 34,
        "name": "Guppy",
        "location": "River",
        "shadow_size": "Smallest",
        "price": 1300,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "text": "April - November"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - May"
            }
        }
    },
    {
        "id": 35,
        "name": "Nibble Fish",
        "location": "River",
        "shadow_size": "Small",
        "price": 1500,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "May - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - March"
            }
        }
    },
    {
        "id": 36,
        "name": "Angelfish",
        "location": "River",
        "shadow_size": "Small",
        "price": 3000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "May - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - April"
            }
        }
    },
    {
        "id": 37,
        "name": "Betta",
        "location": "River",
        "shadow_size": "Small",
        "price": 2500,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "May - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - April"
            }
        }
    },
    {
        "id": 38,
        "name": "Neon Tetra",
        "location": "River",
        "shadow_size": "Smallest",
        "price": 500,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "text": "April - November"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - May"
            }
        }
    },
    {
        "id": 39,
        "name": "Rainbowfish",
        "location": "River",
        "shadow_size": "Small",
        "price": 800,
        "times": {
            "array": [
                9,
                10,
                11,
                12,
                13,
                14,
                15
            ],
            "text": "9 a.m. - 4 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "May - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - April"
            }
        }
    },
    {
        "id": 40,
        "name": "Piranha",
        "location": "River",
        "shadow_size": "Small",
        "price": 2500,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                21,
                22,
                23
            ],
            "text": "9 a.m. - 4 p.m., 9 p.m. - 4 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 41,
        "name": "Arowana",
        "location": "River",
        "shadow_size": "Large",
        "price": 10000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 42,
        "name": "Dorado",
        "location": "River",
        "shadow_size": "Extra Large",
        "price": 15000,
        "times": {
            "array": [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ],
            "text": "4 a.m. - 9 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 43,
        "name": "Gar",
        "location": "Pond",
        "shadow_size": "Largest",
        "price": 6000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 44,
        "name": "Arapaima",
        "location": "River",
        "shadow_size": "Largest",
        "price": 10000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 45,
        "name": "Saddled Bichir",
        "location": "River",
        "shadow_size": "Large",
        "price": 4000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                21,
                22,
                23
            ],
            "text": "9 p.m. - 4 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 46,
        "name": "Sturgeon",
        "location": "River (mouth)",
        "shadow_size": "Largest",
        "price": 10000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "September - March"
            },
            "southern": {
                "array": [
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "March - September"
            }
        }
    },
    {
        "id": 47,
        "name": "Sea Butterfly",
        "location": "Sea",
        "shadow_size": "Smallest",
        "price": 1000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            },
            "southern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            }
        }
    },
    {
        "id": 48,
        "name": "Sea Horse",
        "location": "Sea",
        "shadow_size": "Smallest",
        "price": 1100,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "text": "April - November"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - May"
            }
        }
    },
    {
        "id": 49,
        "name": "Clown Fish",
        "location": "Sea",
        "shadow_size": "Smallest",
        "price": 650,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "April - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - March"
            }
        }
    },
    {
        "id": 50,
        "name": "Surgeonfish",
        "location": "Sea",
        "shadow_size": "Small",
        "price": 1000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "April - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - March"
            }
        }
    },
    {
        "id": 51,
        "name": "Butterfly Fish",
        "location": "Sea",
        "shadow_size": "Small",
        "price": 1000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "April - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - March"
            }
        }
    },
    {
        "id": 52,
        "name": "Napoleonfish",
        "location": "Sea",
        "shadow_size": "Largest",
        "price": 10000,
        "times": {
            "array": [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ],
            "text": "4 a.m. - 9 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    7,
                    8
                ],
                "text": "July - August"
            },
            "southern": {
                "array": [
                    1,
                    2
                ],
                "text": "January - February"
            }
        }
    },
    {
        "id": 53,
        "name": "Zebra Turkeyfish",
        "location": "Sea",
        "shadow_size": "Medium",
        "price": 500,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "text": "April - November"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - May"
            }
        }
    },
    {
        "id": 54,
        "name": "Blowfish",
        "location": "Sea",
        "shadow_size": "Medium",
        "price": 5000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "6 p.m. - 4 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - February"
            },
            "southern": {
                "array": [
                    5,
                    6,
                    7,
                    8
                ],
                "text": "May - August"
            }
        }
    },
    {
        "id": 55,
        "name": "Puffer Fish",
        "location": "Sea",
        "shadow_size": "Medium",
        "price": 250,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    7,
                    8,
                    9
                ],
                "text": "July - September"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3
                ],
                "text": "January - March"
            }
        }
    },
    {
        "id": 56,
        "name": "Anchovy",
        "location": "Sea",
        "shadow_size": "Small",
        "price": 200,
        "times": {
            "array": [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ],
            "text": "4 a.m. - 9 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 57,
        "name": "Horse Mackerel",
        "location": "Sea",
        "shadow_size": "Small",
        "price": 150,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 58,
        "name": "Barred Knifejaw",
        "location": "Sea",
        "shadow_size": "Medium",
        "price": 5000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "text": "March - November"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "September - May"
            }
        }
    },
    {
        "id": 59,
        "name": "Sea Bass",
        "location": "Sea",
        "shadow_size": "Extra Large",
        "price": 400,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 60,
        "name": "Red Snapper",
        "location": "Sea",
        "shadow_size": "Large",
        "price": 3000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 61,
        "name": "Dab",
        "location": "Sea",
        "shadow_size": "Medium",
        "price": 300,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    10,
                    11,
                    12
                ],
                "text": "October - April"
            },
            "southern": {
                "array": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "April - October"
            }
        }
    },
    {
        "id": 62,
        "name": "Olive Flounder",
        "location": "Sea",
        "shadow_size": "Large",
        "price": 800,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 63,
        "name": "Squid",
        "location": "Sea",
        "shadow_size": "Medium",
        "price": 500,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - August"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "June - February"
            }
        }
    },
    {
        "id": 64,
        "name": "Moray Eel",
        "location": "Sea",
        "shadow_size": "Extra Large",
        "price": 2000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    8,
                    9,
                    10
                ],
                "text": "August - October"
            },
            "southern": {
                "array": [
                    2,
                    3,
                    4
                ],
                "text": "February - April"
            }
        }
    },
    {
        "id": 65,
        "name": "Ribbon Eel",
        "location": "Sea",
        "shadow_size": "Narrow",
        "price": 600,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "June - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - April"
            }
        }
    },
    {
        "id": 66,
        "name": "Tuna",
        "location": "Pier",
        "shadow_size": "Extra Large",
        "price": 7000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - April"
            },
            "southern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "May - October"
            }
        }
    },
    {
        "id": 67,
        "name": "Blue Marlin",
        "location": "Pier",
        "shadow_size": "Extra Large",
        "price": 10000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    7,
                    8,
                    9,
                    11,
                    12
                ],
                "text": "July - September, November - April"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "text": "January - March, May - November"
            }
        }
    },
    {
        "id": 68,
        "name": "Giant Trevally",
        "location": "Pier",
        "shadow_size": "Large",
        "price": 4500,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "May - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - April"
            }
        }
    },
    {
        "id": 69,
        "name": "Mahi-mahi",
        "location": "Sea",
        "shadow_size": "Large",
        "price": 6000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ],
                "text": "May - October"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - April"
            }
        }
    },
    {
        "id": 70,
        "name": "Ocean Sunfish",
        "location": "Sea",
        "shadow_size": "Largest (Fin)",
        "price": 4000,
        "times": {
            "array": [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ],
            "text": "4 a.m. - 9 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    7,
                    8,
                    9
                ],
                "text": "July - September"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3
                ],
                "text": "January - March"
            }
        }
    },
    {
        "id": 71,
        "name": "Ray",
        "location": "Sea",
        "shadow_size": "Extra Large",
        "price": 3000,
        "times": {
            "array": [
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
            ],
            "text": "4 a.m. - 9 p.m."
        },
        "months": {
            "northern": {
                "array": [
                    8,
                    9,
                    10,
                    11
                ],
                "text": "August - November"
            },
            "southern": {
                "array": [
                    2,
                    3,
                    4,
                    5
                ],
                "text": "February - May"
            }
        }
    },
    {
        "id": 72,
        "name": "Saw Shark",
        "location": "Sea",
        "shadow_size": "Largest (Fin)",
        "price": 12000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 73,
        "name": "Hammerhead Shark",
        "location": "Sea",
        "shadow_size": "Largest (Fin)",
        "price": 8000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 74,
        "name": "Great White Shark",
        "location": "Sea",
        "shadow_size": "Largest (Fin)",
        "price": 15000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 75,
        "name": "Whale Shark",
        "location": "Sea",
        "shadow_size": "Largest (Fin)",
        "price": 13000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 76,
        "name": "Suckerfish",
        "location": "Sea",
        "shadow_size": "(Fin)",
        "price": 1500,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    6,
                    7,
                    8,
                    9
                ],
                "text": "June - September"
            },
            "southern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - March"
            }
        }
    },
    {
        "id": 77,
        "name": "Football Fish",
        "location": "Sea",
        "shadow_size": "Large",
        "price": 2500,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "4 p.m. - 9 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    11,
                    12
                ],
                "text": "November - March"
            },
            "southern": {
                "array": [
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                "text": "May - September"
            }
        }
    },
    {
        "id": 78,
        "name": "Oarfish",
        "location": "Sea",
        "shadow_size": "Largest",
        "price": 9000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    0,
                    1,
                    12
                ],
                "text": "December - May"
            },
            "southern": {
                "array": [
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "text": "June - November"
            }
        }
    },
    {
        "id": 79,
        "name": "Barreleye",
        "location": "Sea",
        "shadow_size": "Small",
        "price": 15000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                21,
                22,
                23
            ],
            "text": "9 p.m. - 4 a.m."
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    },
    {
        "id": 80,
        "name": "Coelacanth",
        "location": "Sea (rainy days)",
        "shadow_size": "Largest",
        "price": 15000,
        "times": {
            "array": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ],
            "text": "All day"
        },
        "months": {
            "northern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            },
            "southern": {
                "array": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                "text": "Year Round"
            }
        }
    }
]