// Fetch tracks with recommendation(s)
db.tracks.aggregate([
  { 
    $lookup: {
      from: 'recommendations',
      localField: 'track_id',
      foreignField: 'track_id',
      as: 'recommendations'
    }
  },
  {
    $match: {
      recommendations: {$size: 1}
    }
  }
]);

// Result
[{
  "_id": {
    "$oid": "65857f0a233d7f1c7fbeb3c9"
  },
  "track_id": "5SuOikwiRyPMVoIQDJUgSV",
  "artists": "Gen Hoshino",
  "album_name": "Comedy",
  "track_name": "Comedy",
  "popularity": 73,
  "duration_ms": 230666,
  "explicit": true,
  "danceability": 0.676,
  "energy": 0.461,
  "key": 1,
  "loudness": -6.746,
  "mode": 0,
  "speechiness": 0.143,
  "acousticness": 0.0322,
  "instrumentalness": 0.00000101,
  "liveness": 0.358,
  "valence": 0.715,
  "tempo": 87.917,
  "time_signature": 4,
  "track_genre": "acoustic",
  "recommendations": [
    {
      "_id": {
        "$oid": "65871338233d7f1c7fc07317"
      },
      "track_id": "5SuOikwiRyPMVoIQDJUgSV",
      "recommended_track_id": "6owKuyHxUqidcAA6fPKSyy"
    }
  ]
},{
  "_id": {
    "$oid": "65857f0a233d7f1c7fbeb3ca"
  },
  "track_id": "4qPNDBW1i3p13qLCt0Ki3A",
  "artists": "Ben Woodward",
  "album_name": "Ghost (Acoustic)",
  "track_name": "Ghost - Acoustic",
  "popularity": 55,
  "duration_ms": 149610,
  "explicit": true,
  "danceability": 0.42,
  "energy": 0.166,
  "key": 1,
  "loudness": -17.235,
  "mode": 1,
  "speechiness": 0.0763,
  "acousticness": 0.924,
  "instrumentalness": 0.00000556,
  "liveness": 0.101,
  "valence": 0.267,
  "tempo": 77.489,
  "time_signature": 4,
  "track_genre": "acoustic",
  "recommendations": [
    {
      "_id": {
        "$oid": "65871338233d7f1c7fc07318"
      },
      "track_id": "4qPNDBW1i3p13qLCt0Ki3A",
      "recommended_track_id": "7x4b0UccXSKBWxWmjcrG2T"
    }
  ]
},{
  "_id": {
    "$oid": "65857f0a233d7f1c7fbeb3cb"
  },
  "track_id": "1iJBSr7s7jYXzM8EGcbK5b",
  "artists": "Ingrid Michaelson;ZAYN",
  "album_name": "To Begin Again",
  "track_name": "To Begin Again",
  "popularity": 57,
  "duration_ms": 210826,
  "explicit": true,
  "danceability": 0.438,
  "energy": 0.359,
  "key": 0,
  "loudness": -9.734,
  "mode": 1,
  "speechiness": 0.0557,
  "acousticness": 0.21,
  "instrumentalness": 0,
  "liveness": 0.117,
  "valence": 0.12,
  "tempo": 76.332,
  "time_signature": 4,
  "track_genre": "acoustic",
  "recommendations": [
    {
      "_id": {
        "$oid": "65871338233d7f1c7fc07319"
      },
      "track_id": "1iJBSr7s7jYXzM8EGcbK5b",
      "recommended_track_id": "7k9GuJYLp2AzqokyEdwEw2"
    }
  ]
}]

// Fetch tracks & recommendations features
db.recommendations.aggregate([
  {
    '$lookup': {
      'from': 'tracks', 
      'localField': 'track_id', 
      'foreignField': 'track_id', 
      'as': 'trackFeatures'
    }
  }, {
    '$lookup': {
      'from': 'tracks', 
      'localField': 'recommended_track_id', 
      'foreignField': 'track_id', 
      'as': 'recommendedFeatures'
    }
  }, {
    '$limit': 3
  }
]);

// Result
[{
  "_id": {
    "$oid": "65871338233d7f1c7fc07317"
  },
  "track_id": "5SuOikwiRyPMVoIQDJUgSV",
  "recommended_track_id": "6owKuyHxUqidcAA6fPKSyy",
  "trackFeatures": [
    {
      "_id": {
        "$oid": "65857f0a233d7f1c7fbeb3c9"
      },
      "track_id": "5SuOikwiRyPMVoIQDJUgSV",
      "artists": "Gen Hoshino",
      "album_name": "Comedy",
      "track_name": "Comedy",
      "popularity": 73,
      "duration_ms": 230666,
      "explicit": true,
      "danceability": 0.676,
      "energy": 0.461,
      "key": 1,
      "loudness": -6.746,
      "mode": 0,
      "speechiness": 0.143,
      "acousticness": 0.0322,
      "instrumentalness": 0.00000101,
      "liveness": 0.358,
      "valence": 0.715,
      "tempo": 87.917,
      "time_signature": 4,
      "track_genre": "acoustic"
    },
    {
      "_id": {
        "$oid": "65857f17233d7f1c7fbfa65f"
      },
      "track_id": "5SuOikwiRyPMVoIQDJUgSV",
      "artists": "Gen Hoshino",
      "album_name": "Comedy",
      "track_name": "Comedy",
      "popularity": 73,
      "duration_ms": 230666,
      "explicit": true,
      "danceability": 0.676,
      "energy": 0.461,
      "key": 1,
      "loudness": -6.746,
      "mode": 0,
      "speechiness": 0.143,
      "acousticness": 0.0322,
      "instrumentalness": 0.00000101,
      "liveness": 0.358,
      "valence": 0.715,
      "tempo": 87.917,
      "time_signature": 4,
      "track_genre": "j-pop"
    },
    {
      "_id": {
        "$oid": "65857f1f233d7f1c7fc03719"
      },
      "track_id": "5SuOikwiRyPMVoIQDJUgSV",
      "artists": "Gen Hoshino",
      "album_name": "Comedy",
      "track_name": "Comedy",
      "popularity": 73,
      "duration_ms": 230666,
      "explicit": true,
      "danceability": 0.676,
      "energy": 0.461,
      "key": 1,
      "loudness": -6.746,
      "mode": 0,
      "speechiness": 0.143,
      "acousticness": 0.0322,
      "instrumentalness": 0.00000101,
      "liveness": 0.358,
      "valence": 0.715,
      "tempo": 87.917,
      "time_signature": 4,
      "track_genre": "singer-songwriter"
    },
    {
      "_id": {
        "$oid": "65857f20233d7f1c7fc042d0"
      },
      "track_id": "5SuOikwiRyPMVoIQDJUgSV",
      "artists": "Gen Hoshino",
      "album_name": "Comedy",
      "track_name": "Comedy",
      "popularity": 73,
      "duration_ms": 230666,
      "explicit": true,
      "danceability": 0.676,
      "energy": 0.461,
      "key": 1,
      "loudness": -6.746,
      "mode": 0,
      "speechiness": 0.143,
      "acousticness": 0.0322,
      "instrumentalness": 0.00000101,
      "liveness": 0.358,
      "valence": 0.715,
      "tempo": 87.917,
      "time_signature": 4,
      "track_genre": "songwriter"
    }
  ],
  "recommendedFeatures": [
    {
      "_id": {
        "$oid": "65857f0a233d7f1c7fbeb408"
      },
      "track_id": "6owKuyHxUqidcAA6fPKSyy",
      "artists": "Boyce Avenue;Bea Miller",
      "album_name": "Cover Sessions, Vol. 3",
      "track_name": "We Can't Stop",
      "popularity": 64,
      "duration_ms": 222146,
      "explicit": true,
      "danceability": 0.705,
      "energy": 0.347,
      "key": 2,
      "loudness": -8.249,
      "mode": 1,
      "speechiness": 0.0301,
      "acousticness": 0.674,
      "instrumentalness": 0,
      "liveness": 0.12,
      "valence": 0.36,
      "tempo": 80.057,
      "time_signature": 4,
      "track_genre": "acoustic"
    }
  ]
},{
  "_id": {
    "$oid": "65871338233d7f1c7fc07318"
  },
  "track_id": "4qPNDBW1i3p13qLCt0Ki3A",
  "recommended_track_id": "7x4b0UccXSKBWxWmjcrG2T",
  "trackFeatures": [
    {
      "_id": {
        "$oid": "65857f0a233d7f1c7fbeb3ca"
      },
      "track_id": "4qPNDBW1i3p13qLCt0Ki3A",
      "artists": "Ben Woodward",
      "album_name": "Ghost (Acoustic)",
      "track_name": "Ghost - Acoustic",
      "popularity": 55,
      "duration_ms": 149610,
      "explicit": true,
      "danceability": 0.42,
      "energy": 0.166,
      "key": 1,
      "loudness": -17.235,
      "mode": 1,
      "speechiness": 0.0763,
      "acousticness": 0.924,
      "instrumentalness": 0.00000556,
      "liveness": 0.101,
      "valence": 0.267,
      "tempo": 77.489,
      "time_signature": 4,
      "track_genre": "acoustic"
    },
    {
      "_id": {
        "$oid": "65857f0e233d7f1c7fbeef1f"
      },
      "track_id": "4qPNDBW1i3p13qLCt0Ki3A",
      "artists": "Ben Woodward",
      "album_name": "Ghost (Acoustic)",
      "track_name": "Ghost - Acoustic",
      "popularity": 55,
      "duration_ms": 149610,
      "explicit": true,
      "danceability": 0.42,
      "energy": 0.166,
      "key": 1,
      "loudness": -17.235,
      "mode": 1,
      "speechiness": 0.0763,
      "acousticness": 0.924,
      "instrumentalness": 0.00000556,
      "liveness": 0.101,
      "valence": 0.267,
      "tempo": 77.489,
      "time_signature": 4,
      "track_genre": "chill"
    }
  ],
  "recommendedFeatures": [
    {
      "_id": {
        "$oid": "65857f0a233d7f1c7fbeb407"
      },
      "track_id": "7x4b0UccXSKBWxWmjcrG2T",
      "artists": "Kurt Cobain",
      "album_name": "Montage Of Heck: The Home Recordings",
      "track_name": "And I Love Her",
      "popularity": 66,
      "duration_ms": 124933,
      "explicit": true,
      "danceability": 0.616,
      "energy": 0.282,
      "key": 1,
      "loudness": -15.317,
      "mode": 1,
      "speechiness": 0.0331,
      "acousticness": 0.983,
      "instrumentalness": 0.833,
      "liveness": 0.13,
      "valence": 0.435,
      "tempo": 96.638,
      "time_signature": 4,
      "track_genre": "acoustic"
    }
  ]
},{
  "_id": {
    "$oid": "65871338233d7f1c7fc07319"
  },
  "track_id": "1iJBSr7s7jYXzM8EGcbK5b",
  "recommended_track_id": "7k9GuJYLp2AzqokyEdwEw2",
  "trackFeatures": [
    {
      "_id": {
        "$oid": "65857f0a233d7f1c7fbeb3cb"
      },
      "track_id": "1iJBSr7s7jYXzM8EGcbK5b",
      "artists": "Ingrid Michaelson;ZAYN",
      "album_name": "To Begin Again",
      "track_name": "To Begin Again",
      "popularity": 57,
      "duration_ms": 210826,
      "explicit": true,
      "danceability": 0.438,
      "energy": 0.359,
      "key": 0,
      "loudness": -9.734,
      "mode": 1,
      "speechiness": 0.0557,
      "acousticness": 0.21,
      "instrumentalness": 0,
      "liveness": 0.117,
      "valence": 0.12,
      "tempo": 76.332,
      "time_signature": 4,
      "track_genre": "acoustic"
    }
  ],
  "recommendedFeatures": [
    {
      "_id": {
        "$oid": "65857f0a233d7f1c7fbeb3d2"
      },
      "track_id": "7k9GuJYLp2AzqokyEdwEw2",
      "artists": "Ross Copperman",
      "album_name": "Hunger",
      "track_name": "Hunger",
      "popularity": 56,
      "duration_ms": 205594,
      "explicit": true,
      "danceability": 0.442,
      "energy": 0.632,
      "key": 1,
      "loudness": -6.77,
      "mode": 1,
      "speechiness": 0.0295,
      "acousticness": 0.426,
      "instrumentalness": 0.00419,
      "liveness": 0.0735,
      "valence": 0.196,
      "tempo": 78.899,
      "time_signature": 4,
      "track_genre": "acoustic"
    },
    {
      "_id": {
        "$oid": "65857f1b233d7f1c7fbfe8cf"
      },
      "track_id": "7k9GuJYLp2AzqokyEdwEw2",
      "artists": "Ross Copperman",
      "album_name": "Hunger",
      "track_name": "Hunger",
      "popularity": 56,
      "duration_ms": 205594,
      "explicit": true,
      "danceability": 0.442,
      "energy": 0.632,
      "key": 1,
      "loudness": -6.77,
      "mode": 1,
      "speechiness": 0.0295,
      "acousticness": 0.426,
      "instrumentalness": 0.00419,
      "liveness": 0.0735,
      "valence": 0.196,
      "tempo": 78.899,
      "time_signature": 4,
      "track_genre": "piano"
    }
  ]
}]

// Fetch number of time a user played any track
db.analytics.aggregate([
  {
      '$group': {
          '_id': '$user_id', 
          'count': {
            '$sum': 1
          }
      }
  }
]);

// Result
[{
  "_id": "10",
  "count": 54
},{
  "_id": "3",
  "count": 46
},{
  "_id": "9",
  "count": 44
}]