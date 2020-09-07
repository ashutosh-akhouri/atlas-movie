var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema(
    {
        "_id": {
            "$oid": {
                "type": "ObjectId"
            }
        },
        "plot": {
            "type": "String"
        },
        "genres": {
            "type": [
                "String"
            ]
        },
        "runtime": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "rated": {
            "type": "String"
        },
        "cast": {
            "type": [
                "String"
            ]
        },
        "poster": {
            "type": "String"
        },
        "title": {
            "type": "String"
        },
        "fullplot": {
            "type": "String"
        },
        "languages": {
            "type": [
                "String"
            ]
        },
        "released": {
            "$date": {
                "$numberLong": {
                    "type": "String"
                }
            }
        },
        "directors": {
            "type": [
                "String"
            ]
        },
        "writers": {
            "type": [
                "String"
            ]
        },
        "awards": {
            "wins": {
                "$numberInt": {
                    "type": "Date"
                }
            },
            "nominations": {
                "$numberInt": {
                    "type": "Date"
                }
            },
            "text": {
                "type": "String"
            }
        },
        "lastupdated": {
            "type": "Date"
        },
        "year": {
            "$numberInt": {
                "type": "Date"
            }
        },
        "imdb": {
            "rating": {
                "$numberDouble": {
                    "type": "Date"
                }
            },
            "votes": {
                "$numberInt": {
                    "type": "Date"
                }
            },
            "id": {
                "$numberInt": {
                    "type": "Date"
                }
            }
        },
        "countries": {
            "type": [
                "String"
            ]
        },
        "type": {
            "type": "String"
        },
        "tomatoes": {
            "viewer": {
                "rating": {
                    "$numberDouble": {
                        "type": "Date"
                    }
                },
                "numReviews": {
                    "$numberInt": {
                        "type": "Date"
                    }
                },
                "meter": {
                    "$numberInt": {
                        "type": "Date"
                    }
                }
            },
            "dvd": {
                "$date": {
                    "$numberLong": {
                        "type": "String"
                    }
                }
            },
            "lastUpdated": {
                "$date": {
                    "$numberLong": {
                        "type": "String"
                    }
                }
            }
        }
    }
);

var Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
