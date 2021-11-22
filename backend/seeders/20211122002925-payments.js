'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Payments', [
      {
        id: 1,
        amount: 363.43,
        date: "15/05/21",
        user_id: 61
      },
      {
        id: 2,
        amount: 296.75,
        date: "01/05/21",
        user_id: 31
      },
      {
        id: 3,
        amount: 55.65,
        date: "15/08/21",
        user_id: 5
      },
      {
        id: 4,
        amount: 457.52,
        date: "01/07/21",
        user_id: 11
      },
      {
        id: 5,
        amount: 203.46,
        date: "15/01/21",
        user_id: 85
      },
      {
        id: 6,
        amount: 187.13,
        date: "01/06/21",
        user_id: 95
      },
      {
        id: 7,
        amount: 168.22,
        date: "01/09/21",
        user_id: 98
      },
      {
        id: 8,
        amount: 342.94,
        date: "15/07/21",
        user_id: 71
      },
      {
        id: 9,
        amount: 242,
        date: "01/02/21",
        user_id: 76
      },
      {
        id: 10,
        amount: 288.46,
        date: "01/11/21",
        user_id: 11
      },
      {
        id: 11,
        amount: 347.83,
        date: "15/07/21",
        user_id: 22
      },
      {
        id: 12,
        amount: 305.33,
        date: "01/10/21",
        user_id: 47
      },
      {
        id: 13,
        amount: 235.61,
        date: "01/01/21",
        user_id: 97
      },
      {
        id: 14,
        amount: 99.73,
        date: "01/05/21",
        user_id: 78
      },
      {
        id: 15,
        amount: 475.27,
        date: "01/04/21",
        user_id: 81
      },
      {
        id: 16,
        amount: 432.32,
        date: "15/01/21",
        user_id: 12
      },
      {
        id: 17,
        amount: 236.67,
        date: "15/06/21",
        user_id: 68
      },
      {
        id: 18,
        amount: 365.38,
        date: "01/08/21",
        user_id: 24
      },
      {
        id: 19,
        amount: 376.68,
        date: "01/05/21",
        user_id: 96
      },
      {
        id: 20,
        amount: 50.43,
        date: "15/07/21",
        user_id: 67
      },
      {
        id: 21,
        amount: 111.67,
        date: "15/02/21",
        user_id: 37
      },
      {
        id: 22,
        amount: 224.01,
        date: "01/09/21",
        user_id: 6
      },
      {
        id: 23,
        amount: 428.59,
        date: "01/03/21",
        user_id: 78
      },
      {
        id: 24,
        amount: 216.02,
        date: "15/09/21",
        user_id: 77
      },
      {
        id: 25,
        amount: 285.79,
        date: "01/01/21",
        user_id: 82
      },
      {
        id: 26,
        amount: 465.43,
        date: "01/01/21",
        user_id: 36
      },
      {
        id: 27,
        amount: 342.76,
        date: "15/03/21",
        user_id: 75
      },
      {
        id: 28,
        amount: 356.65,
        date: "15/03/21",
        user_id: 58
      },
      {
        id: 29,
        amount: 181.69,
        date: "15/07/21",
        user_id: 4
      },
      {
        id: 30,
        amount: 100.24,
        date: "15/04/21",
        user_id: 14
      },
      {
        id: 31,
        amount: 456.58,
        date: "15/01/21",
        user_id: 49
      },
      {
        id: 32,
        amount: 272.88,
        date: "01/09/21",
        user_id: 66
      },
      {
        id: 33,
        amount: 483.67,
        date: "15/03/21",
        user_id: 81
      },
      {
        id: 34,
        amount: 392.72,
        date: "15/06/21",
        user_id: 11
      },
      {
        id: 35,
        amount: 154.31,
        date: "15/04/21",
        user_id: 21
      },
      {
        id: 36,
        amount: 300.03,
        date: "01/02/21",
        user_id: 77
      },
      {
        id: 37,
        amount: 324,
        date: "15/05/21",
        user_id: 65
      },
      {
        id: 38,
        amount: 342.83,
        date: "15/04/21",
        user_id: 34
      },
      {
        id: 39,
        amount: 337.74,
        date: "01/02/21",
        user_id: 36
      },
      {
        id: 40,
        amount: 321.88,
        date: "01/08/21",
        user_id: 99
      },
      {
        id: 41,
        amount: 182.73,
        date: "15/05/21",
        user_id: 27
      },
      {
        id: 42,
        amount: 427.19,
        date: "01/10/21",
        user_id: 41
      },
      {
        id: 43,
        amount: 77.75,
        date: "15/04/21",
        user_id: 18
      },
      {
        id: 44,
        amount: 239.67,
        date: "15/02/21",
        user_id: 9
      },
      {
        id: 45,
        amount: 92.47,
        date: "15/06/21",
        user_id: 81
      },
      {
        id: 46,
        amount: 189.1,
        date: "15/10/21",
        user_id: 31
      },
      {
        id: 47,
        amount: 138.06,
        date: "15/01/21",
        user_id: 91
      },
      {
        id: 48,
        amount: 259.47,
        date: "01/07/21",
        user_id: 12
      },
      {
        id: 49,
        amount: 480.18,
        date: "01/07/21",
        user_id: 56
      },
      {
        id: 50,
        amount: 470.93,
        date: "15/05/21",
        user_id: 91
      },
      {
        id: 51,
        amount: 124.43,
        date: "15/08/21",
        user_id: 88
      },
      {
        id: 52,
        amount: 372.66,
        date: "01/09/21",
        user_id: 47
      },
      {
        id: 53,
        amount: 434.16,
        date: "15/05/21",
        user_id: 76
      },
      {
        id: 54,
        amount: 219.61,
        date: "15/05/21",
        user_id: 96
      },
      {
        id: 55,
        amount: 437.38,
        date: "15/06/21",
        user_id: 98
      },
      {
        id: 56,
        amount: 86.43,
        date: "15/04/21",
        user_id: 9
      },
      {
        id: 57,
        amount: 148.13,
        date: "01/03/21",
        user_id: 46
      },
      {
        id: 58,
        amount: 481.37,
        date: "15/02/21",
        user_id: 41
      },
      {
        id: 59,
        amount: 143.63,
        date: "15/01/21",
        user_id: 88
      },
      {
        id: 60,
        amount: 101.61,
        date: "01/08/21",
        user_id: 3
      },
      {
        id: 61,
        amount: 409.86,
        date: "15/01/21",
        user_id: 71
      },
      {
        id: 62,
        amount: 226.38,
        date: "01/06/21",
        user_id: 39
      },
      {
        id: 63,
        amount: 366.06,
        date: "01/03/21",
        user_id: 21
      },
      {
        id: 64,
        amount: 64.62,
        date: "15/04/21",
        user_id: 91
      },
      {
        id: 65,
        amount: 236.93,
        date: "15/04/21",
        user_id: 18
      },
      {
        id: 66,
        amount: 57.33,
        date: "15/06/21",
        user_id: 98
      },
      {
        id: 67,
        amount: 484.56,
        date: "15/08/21",
        user_id: 53
      },
      {
        id: 68,
        amount: 224.22,
        date: "15/08/21",
        user_id: 15
      },
      {
        id: 69,
        amount: 481.85,
        date: "15/09/21",
        user_id: 96
      },
      {
        id: 70,
        amount: 491.97,
        date: "01/10/21",
        user_id: 101
      },
      {
        id: 71,
        amount: 236.66,
        date: "01/01/21",
        user_id: 81
      },
      {
        id: 72,
        amount: 318.69,
        date: "01/03/21",
        user_id: 94
      },
      {
        id: 73,
        amount: 161.4,
        date: "15/01/21",
        user_id: 36
      },
      {
        id: 74,
        amount: 433.95,
        date: "01/02/21",
        user_id: 17
      },
      {
        id: 75,
        amount: 314.47,
        date: "15/04/21",
        user_id: 65
      },
      {
        id: 76,
        amount: 219.74,
        date: "15/06/21",
        user_id: 67
      },
      {
        id: 77,
        amount: 181.88,
        date: "01/03/21",
        user_id: 3
      },
      {
        id: 78,
        amount: 242.28,
        date: "15/09/21",
        user_id: 29
      },
      {
        id: 79,
        amount: 406.31,
        date: "15/04/21",
        user_id: 61
      },
      {
        id: 80,
        amount: 55.32,
        date: "01/06/21",
        user_id: 29
      },
      {
        id: 81,
        amount: 267.48,
        date: "15/03/21",
        user_id: 63
      },
      {
        id: 82,
        amount: 160.37,
        date: "01/03/21",
        user_id: 81
      },
      {
        id: 83,
        amount: 292.48,
        date: "01/08/21",
        user_id: 26
      },
      {
        id: 84,
        amount: 365.33,
        date: "01/01/21",
        user_id: 11
      },
      {
        id: 85,
        amount: 364.61,
        date: "15/05/21",
        user_id: 55
      },
      {
        id: 86,
        amount: 141.2,
        date: "01/07/21",
        user_id: 4
      },
      {
        id: 87,
        amount: 130.54,
        date: "01/07/21",
        user_id: 1
      },
      {
        id: 88,
        amount: 325.63,
        date: "15/01/21",
        user_id: 12
      },
      {
        id: 89,
        amount: 326.15,
        date: "15/03/21",
        user_id: 5
      },
      {
        id: 90,
        amount: 444.75,
        date: "15/10/21",
        user_id: 31
      },
      {
        id: 91,
        amount: 241.16,
        date: "15/02/21",
        user_id: 53
      },
      {
        id: 92,
        amount: 97.6,
        date: "01/01/21",
        user_id: 16
      },
      {
        id: 93,
        amount: 179.1,
        date: "15/10/21",
        user_id: 67
      },
      {
        id: 94,
        amount: 409.74,
        date: "15/08/21",
        user_id: 58
      },
      {
        id: 95,
        amount: 219.23,
        date: "15/01/21",
        user_id: 74
      },
      {
        id: 96,
        amount: 405.67,
        date: "15/06/21",
        user_id: 73
      },
      {
        id: 97,
        amount: 235.95,
        date: "15/06/21",
        user_id: 85
      },
      {
        id: 98,
        amount: 247.3,
        date: "15/09/21",
        user_id: 45
      },
      {
        id: 99,
        amount: 282.12,
        date: "15/01/21",
        user_id: 59
      },
      {
        id: 100,
        amount: 72.94,
        date: "15/02/21",
        user_id: 67
      },
      {
        id: 101,
        amount: 268.73,
        date: "15/03/21",
        user_id: 15
      },
      {
        id: 102,
        amount: 221.14,
        date: "15/01/21",
        user_id: 13
      },
      {
        id: 103,
        amount: 105.28,
        date: "15/07/21",
        user_id: 2
      },
      {
        id: 104,
        amount: 493.42,
        date: "15/10/21",
        user_id: 46
      },
      {
        id: 105,
        amount: 86.72,
        date: "15/01/21",
        user_id: 88
      },
      {
        id: 106,
        amount: 360.29,
        date: "01/07/21",
        user_id: 17
      },
      {
        id: 107,
        amount: 210.48,
        date: "15/08/21",
        user_id: 12
      },
      {
        id: 108,
        amount: 229.39,
        date: "15/09/21",
        user_id: 11
      },
      {
        id: 109,
        amount: 80.07,
        date: "01/10/21",
        user_id: 54
      },
      {
        id: 110,
        amount: 422.87,
        date: "01/02/21",
        user_id: 39
      },
      {
        id: 111,
        amount: 322.11,
        date: "01/10/21",
        user_id: 91
      },
      {
        id: 112,
        amount: 402.76,
        date: "15/07/21",
        user_id: 99
      },
      {
        id: 113,
        amount: 379.3,
        date: "01/05/21",
        user_id: 16
      },
      {
        id: 114,
        amount: 440.8,
        date: "15/01/21",
        user_id: 78
      },
      {
        id: 115,
        amount: 375.45,
        date: "01/03/21",
        user_id: 49
      },
      {
        id: 116,
        amount: 478.68,
        date: "15/03/21",
        user_id: 8
      },
      {
        id: 117,
        amount: 434.72,
        date: "01/01/21",
        user_id: 43
      },
      {
        id: 118,
        amount: 159.02,
        date: "15/07/21",
        user_id: 41
      },
      {
        id: 119,
        amount: 494.78,
        date: "15/04/21",
        user_id: 31
      },
      {
        id: 120,
        amount: 79.44,
        date: "15/03/21",
        user_id: 1
      },
      {
        id: 121,
        amount: 312.61,
        date: "15/08/21",
        user_id: 53
      },
      {
        id: 122,
        amount: 77.47,
        date: "01/01/21",
        user_id: 89
      },
      {
        id: 123,
        amount: 294.8,
        date: "15/04/21",
        user_id: 47
      },
      {
        id: 124,
        amount: 484.8,
        date: "01/07/21",
        user_id: 33
      },
      {
        id: 125,
        amount: 218.07,
        date: "15/08/21",
        user_id: 51
      },
      {
        id: 126,
        amount: 279.86,
        date: "01/02/21",
        user_id: 38
      },
      {
        id: 127,
        amount: 82.36,
        date: "01/08/21",
        user_id: 81
      },
      {
        id: 128,
        amount: 233.68,
        date: "01/10/21",
        user_id: 54
      },
      {
        id: 129,
        amount: 105.81,
        date: "15/05/21",
        user_id: 11
      },
      {
        id: 130,
        amount: 213.05,
        date: "15/07/21",
        user_id: 31
      },
      {
        id: 131,
        amount: 434.05,
        date: "15/07/21",
        user_id: 11
      },
      {
        id: 132,
        amount: 166.31,
        date: "15/04/21",
        user_id: 87
      },
      {
        id: 133,
        amount: 255.6,
        date: "01/05/21",
        user_id: 33
      },
      {
        id: 134,
        amount: 196.01,
        date: "15/06/21",
        user_id: 93
      },
      {
        id: 135,
        amount: 398.2,
        date: "01/03/21",
        user_id: 11
      },
      {
        id: 136,
        amount: 469.3,
        date: "01/04/21",
        user_id: 22
      },
      {
        id: 137,
        amount: 259.56,
        date: "01/01/21",
        user_id: 9
      },
      {
        id: 138,
        amount: 433.11,
        date: "15/06/21",
        user_id: 99
      },
      {
        id: 139,
        amount: 327.67,
        date: "01/10/21",
        user_id: 54
      },
      {
        id: 140,
        amount: 290.52,
        date: "01/10/21",
        user_id: 29
      },
      {
        id: 141,
        amount: 158.63,
        date: "15/04/21",
        user_id: 52
      },
      {
        id: 142,
        amount: 436.61,
        date: "15/01/21",
        user_id: 54
      },
      {
        id: 143,
        amount: 154.15,
        date: "01/06/21",
        user_id: 8
      },
      {
        id: 144,
        amount: 184.74,
        date: "15/08/21",
        user_id: 29
      },
      {
        id: 145,
        amount: 247.02,
        date: "15/07/21",
        user_id: 81
      },
      {
        id: 146,
        amount: 431.13,
        date: "15/05/21",
        user_id: 67
      },
      {
        id: 147,
        amount: 407.4,
        date: "15/04/21",
        user_id: 36
      },
      {
        id: 148,
        amount: 351.22,
        date: "01/03/21",
        user_id: 15
      },
      {
        id: 149,
        amount: 186.9,
        date: "01/05/21",
        user_id: 87
      },
      {
        id: 150,
        amount: 456.16,
        date: "15/10/21",
        user_id: 36
      },
      {
        id: 151,
        amount: 300.16,
        date: "15/02/21",
        user_id: 17
      },
      {
        id: 152,
        amount: 75.68,
        date: "15/08/21",
        user_id: 3
      },
      {
        id: 153,
        amount: 74.12,
        date: "01/07/21",
        user_id: 76
      },
      {
        id: 154,
        amount: 330.78,
        date: "01/06/21",
        user_id: 85
      },
      {
        id: 155,
        amount: 372.05,
        date: "15/07/21",
        user_id: 76
      },
      {
        id: 156,
        amount: 324.67,
        date: "01/09/21",
        user_id: 81
      },
      {
        id: 157,
        amount: 74.13,
        date: "15/06/21",
        user_id: 35
      },
      {
        id: 158,
        amount: 376.56,
        date: "15/07/21",
        user_id: 1
      },
      {
        id: 159,
        amount: 278.85,
        date: "01/10/21",
        user_id: 25
      },
      {
        id: 160,
        amount: 161.68,
        date: "01/10/21",
        user_id: 87
      },
      {
        id: 161,
        amount: 189.36,
        date: "15/01/21",
        user_id: 46
      },
      {
        id: 162,
        amount: 289.42,
        date: "01/04/21",
        user_id: 31
      },
      {
        id: 163,
        amount: 325.2,
        date: "01/09/21",
        user_id: 91
      },
      {
        id: 164,
        amount: 293.06,
        date: "15/07/21",
        user_id: 17
      },
      {
        id: 165,
        amount: 53.6,
        date: "01/05/21",
        user_id: 63
      },
      {
        id: 166,
        amount: 276.18,
        date: "01/08/21",
        user_id: 35
      },
      {
        id: 167,
        amount: 298.98,
        date: "01/07/21",
        user_id: 56
      },
      {
        id: 168,
        amount: 424.5,
        date: "01/02/21",
        user_id: 79
      },
      {
        id: 169,
        amount: 172.83,
        date: "15/03/21",
        user_id: 2
      },
      {
        id: 170,
        amount: 135.89,
        date: "15/06/21",
        user_id: 64
      },
      {
        id: 171,
        amount: 110.89,
        date: "15/05/21",
        user_id: 81
      },
      {
        id: 172,
        amount: 224.16,
        date: "15/04/21",
        user_id: 19
      },
      {
        id: 173,
        amount: 264.11,
        date: "15/04/21",
        user_id: 22
      },
      {
        id: 174,
        amount: 379.85,
        date: "15/03/21",
        user_id: 15
      },
      {
        id: 175,
        amount: 395.94,
        date: "01/06/21",
        user_id: 41
      },
      {
        id: 176,
        amount: 52.05,
        date: "01/02/21",
        user_id: 82
      },
      {
        id: 177,
        amount: 303.76,
        date: "01/04/21",
        user_id: 38
      },
      {
        id: 178,
        amount: 495.08,
        date: "01/05/21",
        user_id: 11
      },
      {
        id: 179,
        amount: 485.47,
        date: "01/10/21",
        user_id: 55
      },
      {
        id: 180,
        amount: 424.16,
        date: "15/07/21",
        user_id: 15
      },
      {
        id: 181,
        amount: 161.48,
        date: "01/08/21",
        user_id: 4
      },
      {
        id: 182,
        amount: 379.11,
        date: "01/06/21",
        user_id: 91
      },
      {
        id: 183,
        amount: 428.56,
        date: "01/02/21",
        user_id: 59
      },
      {
        id: 184,
        amount: 178.52,
        date: "01/07/21",
        user_id: 41
      },
      {
        id: 185,
        amount: 203.09,
        date: "01/03/21",
        user_id: 32
      },
      {
        id: 186,
        amount: 306.82,
        date: "01/08/21",
        user_id: 36
      },
      {
        id: 187,
        amount: 262.5,
        date: "15/02/21",
        user_id: 83
      },
      {
        id: 188,
        amount: 329.96,
        date: "01/10/21",
        user_id: 96
      },
      {
        id: 189,
        amount: 429.79,
        date: "15/04/21",
        user_id: 37
      },
      {
        id: 190,
        amount: 59.26,
        date: "15/09/21",
        user_id: 44
      },
      {
        id: 191,
        amount: 375.82,
        date: "15/10/21",
        user_id: 41
      },
      {
        id: 192,
        amount: 317.33,
        date: "01/10/21",
        user_id: 3
      },
      {
        id: 193,
        amount: 266.72,
        date: "01/08/21",
        user_id: 23
      },
      {
        id: 194,
        amount: 435.3,
        date: "15/03/21",
        user_id: 96
      },
      {
        id: 195,
        amount: 373.21,
        date: "15/04/21",
        user_id: 58
      },
      {
        id: 196,
        amount: 471.89,
        date: "15/09/21",
        user_id: 59
      },
      {
        id: 197,
        amount: 419.08,
        date: "01/06/21",
        user_id: 9
      },
      {
        id: 198,
        amount: 156.62,
        date: "01/09/21",
        user_id: 89
      },
      {
        id: 199,
        amount: 443.77,
        date: "15/01/21",
        user_id: 12
      },
      {
        id: 200,
        amount: 134.68,
        date: "01/07/21",
        user_id: 3
      },
      {
        id: 201,
        amount: 202.78,
        date: "01/10/21",
        user_id: 87
      },
      {
        id: 202,
        amount: 126.81,
        date: "15/02/21",
        user_id: 65
      },
      {
        id: 203,
        amount: 268.43,
        date: "15/02/21",
        user_id: 74
      },
      {
        id: 204,
        amount: 272.61,
        date: "01/03/21",
        user_id: 64
      },
      {
        id: 205,
        amount: 286.47,
        date: "01/10/21",
        user_id: 69
      },
      {
        id: 206,
        amount: 324.81,
        date: "01/01/21",
        user_id: 79
      },
      {
        id: 207,
        amount: 301.59,
        date: "01/09/21",
        user_id: 66
      },
      {
        id: 208,
        amount: 273.66,
        date: "01/07/21",
        user_id: 92
      },
      {
        id: 209,
        amount: 466.23,
        date: "01/05/21",
        user_id: 7
      },
      {
        id: 210,
        amount: 95.15,
        date: "15/10/21",
        user_id: 15
      },
      {
        id: 211,
        amount: 409.17,
        date: "01/04/21",
        user_id: 41
      },
      {
        id: 212,
        amount: 199.76,
        date: "15/08/21",
        user_id: 9
      },
      {
        id: 213,
        amount: 54.77,
        date: "01/01/21",
        user_id: 41
      },
      {
        id: 214,
        amount: 166.39,
        date: "01/05/21",
        user_id: 61
      },
      {
        id: 215,
        amount: 422.16,
        date: "01/06/21",
        user_id: 56
      },
      {
        id: 216,
        amount: 262.91,
        date: "01/02/21",
        user_id: 81
      },
      {
        id: 217,
        amount: 319.79,
        date: "01/07/21",
        user_id: 53
      },
      {
        id: 218,
        amount: 123.02,
        date: "15/06/21",
        user_id: 31
      },
      {
        id: 219,
        amount: 254.89,
        date: "15/08/21",
        user_id: 31
      },
      {
        id: 220,
        amount: 370.52,
        date: "01/08/21",
        user_id: 95
      },
      {
        id: 221,
        amount: 443.14,
        date: "15/06/21",
        user_id: 67
      },
      {
        id: 222,
        amount: 157.66,
        date: "15/02/21",
        user_id: 78
      },
      {
        id: 223,
        amount: 431.39,
        date: "15/10/21",
        user_id: 5
      },
      {
        id: 224,
        amount: 401.84,
        date: "01/07/21",
        user_id: 31
      },
      {
        id: 225,
        amount: 345.48,
        date: "01/09/21",
        user_id: 78
      },
      {
        id: 226,
        amount: 132.93,
        date: "01/02/21",
        user_id: 2
      },
      {
        id: 227,
        amount: 490.95,
        date: "15/05/21",
        user_id: 4
      },
      {
        id: 228,
        amount: 348.22,
        date: "01/06/21",
        user_id: 42
      },
      {
        id: 229,
        amount: 184.81,
        date: "01/06/21",
        user_id: 15
      },
      {
        id: 230,
        amount: 402.48,
        date: "01/10/21",
        user_id: 59
      },
      {
        id: 231,
        amount: 152.71,
        date: "01/08/21",
        user_id: 41
      },
      {
        id: 232,
        amount: 328.44,
        date: "01/08/21",
        user_id: 12
      },
      {
        id: 233,
        amount: 398.42,
        date: "15/09/21",
        user_id: 77
      },
      {
        id: 234,
        amount: 421.09,
        date: "01/01/21",
        user_id: 88
      },
      {
        id: 235,
        amount: 328.85,
        date: "01/09/21",
        user_id: 37
      },
      {
        id: 236,
        amount: 226.01,
        date: "15/06/21",
        user_id: 91
      },
      {
        id: 237,
        amount: 143.27,
        date: "15/01/21",
        user_id: 75
      },
      {
        id: 238,
        amount: 425.35,
        date: "01/01/21",
        user_id: 21
      },
      {
        id: 239,
        amount: 406.44,
        date: "15/05/21",
        user_id: 63
      },
      {
        id: 240,
        amount: 194.07,
        date: "01/03/21",
        user_id: 93
      },
      {
        id: 241,
        amount: 179.08,
        date: "15/09/21",
        user_id: 48
      },
      {
        id: 242,
        amount: 309.72,
        date: "15/01/21",
        user_id: 43
      },
      {
        id: 243,
        amount: 161.12,
        date: "01/10/21",
        user_id: 31
      },
      {
        id: 244,
        amount: 483.42,
        date: "15/03/21",
        user_id: 1
      },
      {
        id: 245,
        amount: 160.38,
        date: "01/08/21",
        user_id: 24
      },
      {
        id: 246,
        amount: 320.78,
        date: "01/06/21",
        user_id: 29
      },
      {
        id: 247,
        amount: 107.39,
        date: "15/02/21",
        user_id: 34
      },
      {
        id: 248,
        amount: 133.53,
        date: "01/05/21",
        user_id: 17
      },
      {
        id: 249,
        amount: 369.3,
        date: "15/01/21",
        user_id: 67
      },
      {
        id: 250,
        amount: 379.84,
        date: "01/08/21",
        user_id: 42
      },
      {
        id: 251,
        amount: 213.5,
        date: "01/09/21",
        user_id: 72
      },
      {
        id: 252,
        amount: 205.25,
        date: "15/09/21",
        user_id: 63
      },
      {
        id: 253,
        amount: 448.51,
        date: "15/09/21",
        user_id: 44
      },
      {
        id: 254,
        amount: 235.68,
        date: "01/09/21",
        user_id: 57
      },
      {
        id: 255,
        amount: 393.79,
        date: "01/04/21",
        user_id: 51
      },
      {
        id: 256,
        amount: 405.06,
        date: "01/06/21",
        user_id: 68
      },
      {
        id: 257,
        amount: 96.01,
        date: "15/09/21",
        user_id: 72
      },
      {
        id: 258,
        amount: 340.14,
        date: "15/03/21",
        user_id: 91
      },
      {
        id: 259,
        amount: 179.55,
        date: "01/01/21",
        user_id: 13
      },
      {
        id: 260,
        amount: 231.66,
        date: "15/05/21",
        user_id: 11
      },
      {
        id: 261,
        amount: 312.5,
        date: "01/07/21",
        user_id: 2
      },
      {
        id: 262,
        amount: 271.56,
        date: "15/01/21",
        user_id: 33
      },
      {
        id: 263,
        amount: 90.8,
        date: "15/08/21",
        user_id: 11
      },
      {
        id: 264,
        amount: 125.47,
        date: "01/01/21",
        user_id: 22
      },
      {
        id: 265,
        amount: 72.61,
        date: "01/06/21",
        user_id: 27
      },
      {
        id: 266,
        amount: 449.81,
        date: "01/03/21",
        user_id: 21
      },
      {
        id: 267,
        amount: 480.4,
        date: "15/08/21",
        user_id: 94
      },
      {
        id: 268,
        amount: 131.2,
        date: "01/03/21",
        user_id: 51
      },
      {
        id: 269,
        amount: 233.33,
        date: "01/08/21",
        user_id: 4
      },
      {
        id: 270,
        amount: 384.19,
        date: "15/10/21",
        user_id: 91
      },
      {
        id: 271,
        amount: 165.42,
        date: "15/10/21",
        user_id: 97
      },
      {
        id: 272,
        amount: 420.59,
        date: "01/08/21",
        user_id: 67
      },
      {
        id: 273,
        amount: 329.86,
        date: "15/06/21",
        user_id: 8
      },
      {
        id: 274,
        amount: 315.69,
        date: "01/08/21",
        user_id: 61
      },
      {
        id: 275,
        amount: 165.48,
        date: "15/02/21",
        user_id: 35
      },
      {
        id: 276,
        amount: 300.98,
        date: "01/01/21",
        user_id: 94
      },
      {
        id: 277,
        amount: 316.06,
        date: "01/07/21",
        user_id: 6
      },
      {
        id: 278,
        amount: 91.05,
        date: "15/03/21",
        user_id: 33
      },
      {
        id: 279,
        amount: 279.78,
        date: "15/06/21",
        user_id: 51
      },
      {
        id: 280,
        amount: 98.55,
        date: "15/10/21",
        user_id: 89
      },
      {
        id: 281,
        amount: 56.13,
        date: "15/04/21",
        user_id: 23
      },
      {
        id: 282,
        amount: 414.14,
        date: "15/06/21",
        user_id: 36
      },
      {
        id: 283,
        amount: 370.26,
        date: "15/09/21",
        user_id: 2
      },
      {
        id: 284,
        amount: 332.62,
        date: "01/10/21",
        user_id: 5
      },
      {
        id: 285,
        amount: 452.16,
        date: "15/09/21",
        user_id: 45
      },
      {
        id: 286,
        amount: 111.9,
        date: "15/07/21",
        user_id: 35
      },
      {
        id: 287,
        amount: 282.46,
        date: "15/10/21",
        user_id: 62
      },
      {
        id: 288,
        amount: 192.28,
        date: "01/10/21",
        user_id: 28
      },
      {
        id: 289,
        amount: 122.49,
        date: "15/03/21",
        user_id: 76
      },
      {
        id: 290,
        amount: 463.64,
        date: "15/07/21",
        user_id: 81
      },
      {
        id: 291,
        amount: 109.89,
        date: "01/05/21",
        user_id: 29
      },
      {
        id: 292,
        amount: 444.49,
        date: "01/07/21",
        user_id: 77
      },
      {
        id: 293,
        amount: 426.52,
        date: "01/05/21",
        user_id: 22
      },
      {
        id: 294,
        amount: 421.48,
        date: "15/09/21",
        user_id: 88
      },
      {
        id: 295,
        amount: 470.61,
        date: "01/06/21",
        user_id: 11
      },
      {
        id: 296,
        amount: 434.41,
        date: "01/09/21",
        user_id: 57
      },
      {
        id: 297,
        amount: 67.61,
        date: "01/10/21",
        user_id: 3
      },
      {
        id: 298,
        amount: 129.51,
        date: "01/10/21",
        user_id: 21
      },
      {
        id: 299,
        amount: 479.98,
        date: "15/10/21",
        user_id: 8
      },
      {
        id: 300,
        amount: 349.85,
        date: "15/07/21",
        user_id: 49
      },
      {
        id: 301,
        amount: 482.82,
        date: "01/07/21",
        user_id: 46
      },
      {
        id: 302,
        amount: 223.74,
        date: "15/09/21",
        user_id: 78
      },
      {
        id: 303,
        amount: 331.73,
        date: "15/03/21",
        user_id: 7
      },
      {
        id: 304,
        amount: 287.29,
        date: "01/01/21",
        user_id: 31
      },
      {
        id: 305,
        amount: 53.12,
        date: "15/05/21",
        user_id: 48
      },
      {
        id: 306,
        amount: 391.31,
        date: "01/02/21",
        user_id: 2
      },
      {
        id: 307,
        amount: 294.56,
        date: "15/04/21",
        user_id: 1
      },
      {
        id: 308,
        amount: 266.92,
        date: "15/03/21",
        user_id: 91
      },
      {
        id: 309,
        amount: 125.49,
        date: "01/08/21",
        user_id: 51
      },
      {
        id: 310,
        amount: 161.37,
        date: "15/03/21",
        user_id: 3
      },
      {
        id: 311,
        amount: 226.15,
        date: "01/04/21",
        user_id: 71
      },
      {
        id: 312,
        amount: 116.52,
        date: "15/05/21",
        user_id: 23
      },
      {
        id: 313,
        amount: 217.29,
        date: "15/10/21",
        user_id: 99
      },
      {
        id: 314,
        amount: 246.8,
        date: "15/10/21",
        user_id: 57
      },
      {
        id: 315,
        amount: 471.26,
        date: "15/02/21",
        user_id: 88
      },
      {
        id: 316,
        amount: 113.81,
        date: "15/07/21",
        user_id: 51
      },
      {
        id: 317,
        amount: 250.85,
        date: "15/01/21",
        user_id: 19
      },
      {
        id: 318,
        amount: 231.6,
        date: "01/05/21",
        user_id: 21
      },
      {
        id: 319,
        amount: 161.12,
        date: "15/07/21",
        user_id: 21
      },
      {
        id: 320,
        amount: 310.85,
        date: "01/02/21",
        user_id: 76
      },
      {
        id: 321,
        amount: 475.34,
        date: "01/02/21",
        user_id: 92
      },
      {
        id: 322,
        amount: 296.75,
        date: "01/03/21",
        user_id: 36
      },
      {
        id: 323,
        amount: 491.66,
        date: "01/06/21",
        user_id: 42
      },
      {
        id: 324,
        amount: 386.19,
        date: "01/04/21",
        user_id: 68
      },
      {
        id: 325,
        amount: 305.51,
        date: "01/05/21",
        user_id: 84
      },
      {
        id: 326,
        amount: 207.26,
        date: "15/08/21",
        user_id: 11
      },
      {
        id: 327,
        amount: 180.38,
        date: "01/03/21",
        user_id: 54
      },
      {
        id: 328,
        amount: 439.71,
        date: "01/02/21",
        user_id: 87
      },
      {
        id: 329,
        amount: 314.79,
        date: "15/01/21",
        user_id: 48
      },
      {
        id: 330,
        amount: 73.35,
        date: "01/04/21",
        user_id: 94
      },
      {
        id: 331,
        amount: 215.71,
        date: "01/09/21",
        user_id: 78
      },
      {
        id: 332,
        amount: 225.6,
        date: "15/05/21",
        user_id: 74
      },
      {
        id: 333,
        amount: 351.97,
        date: "01/01/21",
        user_id: 13
      },
      {
        id: 334,
        amount: 344.6,
        date: "15/08/21",
        user_id: 91
      },
      {
        id: 335,
        amount: 110.46,
        date: "15/09/21",
        user_id: 44
      },
      {
        id: 336,
        amount: 56.38,
        date: "01/02/21",
        user_id: 89
      },
      {
        id: 337,
        amount: 253.62,
        date: "15/02/21",
        user_id: 4
      },
      {
        id: 338,
        amount: 79.52,
        date: "01/07/21",
        user_id: 54
      },
      {
        id: 339,
        amount: 488.45,
        date: "15/08/21",
        user_id: 52
      },
      {
        id: 340,
        amount: 399.26,
        date: "15/03/21",
        user_id: 99
      },
      {
        id: 341,
        amount: 192.6,
        date: "01/08/21",
        user_id: 62
      },
      {
        id: 342,
        amount: 180.13,
        date: "01/08/21",
        user_id: 22
      },
      {
        id: 343,
        amount: 395.43,
        date: "01/01/21",
        user_id: 42
      },
      {
        id: 344,
        amount: 78.54,
        date: "15/03/21",
        user_id: 81
      },
      {
        id: 345,
        amount: 221.31,
        date: "01/05/21",
        user_id: 61
      },
      {
        id: 346,
        amount: 208.62,
        date: "15/05/21",
        user_id: 71
      },
      {
        id: 347,
        amount: 472.72,
        date: "15/09/21",
        user_id: 69
      },
      {
        id: 348,
        amount: 406.14,
        date: "15/06/21",
        user_id: 42
      },
      {
        id: 349,
        amount: 495.9,
        date: "01/07/21",
        user_id: 11
      },
      {
        id: 350,
        amount: 69.61,
        date: "01/07/21",
        user_id: 91
      },
      {
        id: 351,
        amount: 208.03,
        date: "15/09/21",
        user_id: 9
      },
      {
        id: 352,
        amount: 432.9,
        date: "15/09/21",
        user_id: 63
      },
      {
        id: 353,
        amount: 232.74,
        date: "15/08/21",
        user_id: 82
      },
      {
        id: 354,
        amount: 280.99,
        date: "01/05/21",
        user_id: 62
      },
      {
        id: 355,
        amount: 424.58,
        date: "15/04/21",
        user_id: 84
      },
      {
        id: 356,
        amount: 412.27,
        date: "15/02/21",
        user_id: 46
      },
      {
        id: 357,
        amount: 351.45,
        date: "01/05/21",
        user_id: 91
      },
      {
        id: 358,
        amount: 276.7,
        date: "01/08/21",
        user_id: 45
      },
      {
        id: 359,
        amount: 209.77,
        date: "15/08/21",
        user_id: 59
      },
      {
        id: 360,
        amount: 440.98,
        date: "15/09/21",
        user_id: 95
      },
      {
        id: 361,
        amount: 189.14,
        date: "15/10/21",
        user_id: 65
      },
      {
        id: 362,
        amount: 241.25,
        date: "15/02/21",
        user_id: 66
      },
      {
        id: 363,
        amount: 439.79,
        date: "15/08/21",
        user_id: 57
      },
      {
        id: 364,
        amount: 366.41,
        date: "01/10/21",
        user_id: 57
      },
      {
        id: 365,
        amount: 406.14,
        date: "15/06/21",
        user_id: 92
      },
      {
        id: 366,
        amount: 112.83,
        date: "15/08/21",
        user_id: 85
      },
      {
        id: 367,
        amount: 75.73,
        date: "15/08/21",
        user_id: 28
      },
      {
        id: 368,
        amount: 302.92,
        date: "15/04/21",
        user_id: 54
      },
      {
        id: 369,
        amount: 258.78,
        date: "01/10/21",
        user_id: 26
      },
      {
        id: 370,
        amount: 161.52,
        date: "01/05/21",
        user_id: 5
      },
      {
        id: 371,
        amount: 245.97,
        date: "01/09/21",
        user_id: 56
      },
      {
        id: 372,
        amount: 318.82,
        date: "01/09/21",
        user_id: 21
      },
      {
        id: 373,
        amount: 382.57,
        date: "01/10/21",
        user_id: 91
      },
      {
        id: 374,
        amount: 372.32,
        date: "01/07/21",
        user_id: 33
      },
      {
        id: 375,
        amount: 56.17,
        date: "15/09/21",
        user_id: 13
      },
      {
        id: 376,
        amount: 99.54,
        date: "01/01/21",
        user_id: 42
      },
      {
        id: 377,
        amount: 326.82,
        date: "15/03/21",
        user_id: 91
      },
      {
        id: 378,
        amount: 347.32,
        date: "15/06/21",
        user_id: 101
      },
      {
        id: 379,
        amount: 164.58,
        date: "01/04/21",
        user_id: 37
      },
      {
        id: 380,
        amount: 339.21,
        date: "01/06/21",
        user_id: 12
      },
      {
        id: 381,
        amount: 338.53,
        date: "01/05/21",
        user_id: 37
      },
      {
        id: 382,
        amount: 233.32,
        date: "15/03/21",
        user_id: 62
      },
      {
        id: 383,
        amount: 128.61,
        date: "15/06/21",
        user_id: 17
      },
      {
        id: 384,
        amount: 359.13,
        date: "15/03/21",
        user_id: 5
      },
      {
        id: 385,
        amount: 394.98,
        date: "15/05/21",
        user_id: 63
      },
      {
        id: 386,
        amount: 392.36,
        date: "01/10/21",
        user_id: 81
      },
      {
        id: 387,
        amount: 305.96,
        date: "01/07/21",
        user_id: 23
      },
      {
        id: 388,
        amount: 101.04,
        date: "01/09/21",
        user_id: 64
      },
      {
        id: 389,
        amount: 347.42,
        date: "15/04/21",
        user_id: 81
      },
      {
        id: 390,
        amount: 451.99,
        date: "01/04/21",
        user_id: 31
      },
      {
        id: 391,
        amount: 213.96,
        date: "01/03/21",
        user_id: 99
      },
      {
        id: 392,
        amount: 212.78,
        date: "15/04/21",
        user_id: 36
      },
      {
        id: 393,
        amount: 237.85,
        date: "15/02/21",
        user_id: 14
      },
      {
        id: 394,
        amount: 488.26,
        date: "01/05/21",
        user_id: 48
      },
      {
        id: 395,
        amount: 181.59,
        date: "01/07/21",
        user_id: 68
      },
      {
        id: 396,
        amount: 209.76,
        date: "15/10/21",
        user_id: 1
      },
      {
        id: 397,
        amount: 184.69,
        date: "15/10/21",
        user_id: 84
      },
      {
        id: 398,
        amount: 139.38,
        date: "15/06/21",
        user_id: 81
      },
      {
        id: 399,
        amount: 176.15,
        date: "15/01/21",
        user_id: 63
      },
      {
        id: 400,
        amount: 128.54,
        date: "15/09/21",
        user_id: 91
      },
      {
        id: 401,
        amount: 107.02,
        date: "15/03/21",
        user_id: 61
      },
      {
        id: 402,
        amount: 330.33,
        date: "15/05/21",
        user_id: 92
      },
      {
        id: 403,
        amount: 195.23,
        date: "01/09/21",
        user_id: 54
      },
      {
        id: 404,
        amount: 413.14,
        date: "15/10/21",
        user_id: 67
      },
      {
        id: 405,
        amount: 357.38,
        date: "15/03/21",
        user_id: 3
      },
      {
        id: 406,
        amount: 252.15,
        date: "15/10/21",
        user_id: 3
      },
      {
        id: 407,
        amount: 286.17,
        date: "01/04/21",
        user_id: 25
      },
      {
        id: 408,
        amount: 137.89,
        date: "01/07/21",
        user_id: 54
      },
      {
        id: 409,
        amount: 452.72,
        date: "15/02/21",
        user_id: 41
      },
      {
        id: 410,
        amount: 441.08,
        date: "01/09/21",
        user_id: 38
      },
      {
        id: 411,
        amount: 340.21,
        date: "15/03/21",
        user_id: 44
      },
      {
        id: 412,
        amount: 95.66,
        date: "01/02/21",
        user_id: 75
      },
      {
        id: 413,
        amount: 229,
        date: "01/05/21",
        user_id: 12
      },
      {
        id: 414,
        amount: 409.93,
        date: "15/09/21",
        user_id: 35
      },
      {
        id: 415,
        amount: 383.85,
        date: "15/04/21",
        user_id: 48
      },
      {
        id: 416,
        amount: 301.5,
        date: "15/10/21",
        user_id: 25
      },
      {
        id: 417,
        amount: 356.08,
        date: "01/05/21",
        user_id: 49
      },
      {
        id: 418,
        amount: 104.68,
        date: "15/07/21",
        user_id: 71
      },
      {
        id: 419,
        amount: 276.58,
        date: "01/08/21",
        user_id: 24
      },
      {
        id: 420,
        amount: 205.92,
        date: "15/09/21",
        user_id: 7
      },
      {
        id: 421,
        amount: 316.22,
        date: "01/04/21",
        user_id: 82
      },
      {
        id: 422,
        amount: 172.18,
        date: "01/09/21",
        user_id: 55
      },
      {
        id: 423,
        amount: 417.53,
        date: "01/01/21",
        user_id: 97
      },
      {
        id: 424,
        amount: 115.46,
        date: "01/09/21",
        user_id: 85
      },
      {
        id: 425,
        amount: 77.18,
        date: "15/04/21",
        user_id: 99
      },
      {
        id: 426,
        amount: 190.3,
        date: "01/05/21",
        user_id: 18
      },
      {
        id: 427,
        amount: 231.05,
        date: "01/06/21",
        user_id: 37
      },
      {
        id: 428,
        amount: 205.96,
        date: "01/04/21",
        user_id: 93
      },
      {
        id: 429,
        amount: 455.26,
        date: "15/03/21",
        user_id: 57
      },
      {
        id: 430,
        amount: 214.58,
        date: "15/06/21",
        user_id: 31
      },
      {
        id: 431,
        amount: 419.83,
        date: "15/09/21",
        user_id: 11
      },
      {
        id: 432,
        amount: 435.4,
        date: "01/01/21",
        user_id: 56
      },
      {
        id: 433,
        amount: 172.87,
        date: "01/01/21",
        user_id: 44
      },
      {
        id: 434,
        amount: 110.82,
        date: "15/01/21",
        user_id: 61
      },
      {
        id: 435,
        amount: 304.51,
        date: "15/02/21",
        user_id: 74
      },
      {
        id: 436,
        amount: 440.83,
        date: "15/09/21",
        user_id: 87
      },
      {
        id: 437,
        amount: 55.71,
        date: "01/03/21",
        user_id: 31
      },
      {
        id: 438,
        amount: 229.6,
        date: "01/06/21",
        user_id: 75
      },
      {
        id: 439,
        amount: 109.65,
        date: "01/08/21",
        user_id: 8
      },
      {
        id: 440,
        amount: 150.68,
        date: "15/01/21",
        user_id: 19
      },
      {
        id: 441,
        amount: 484.73,
        date: "01/06/21",
        user_id: 18
      },
      {
        id: 442,
        amount: 169.86,
        date: "01/07/21",
        user_id: 26
      },
      {
        id: 443,
        amount: 133.49,
        date: "15/09/21",
        user_id: 25
      },
      {
        id: 444,
        amount: 191.29,
        date: "01/05/21",
        user_id: 11
      },
      {
        id: 445,
        amount: 62.57,
        date: "15/03/21",
        user_id: 57
      },
      {
        id: 446,
        amount: 111.13,
        date: "01/10/21",
        user_id: 2
      },
      {
        id: 447,
        amount: 208.43,
        date: "15/02/21",
        user_id: 46
      },
      {
        id: 448,
        amount: 152.03,
        date: "01/01/21",
        user_id: 11
      },
      {
        id: 449,
        amount: 113.81,
        date: "01/02/21",
        user_id: 64
      },
      {
        id: 450,
        amount: 470.56,
        date: "01/02/21",
        user_id: 12
      },
      {
        id: 451,
        amount: 424.72,
        date: "15/07/21",
        user_id: 71
      },
      {
        id: 452,
        amount: 486.38,
        date: "15/08/21",
        user_id: 35
      },
      {
        id: 453,
        amount: 270.94,
        date: "15/10/21",
        user_id: 61
      },
      {
        id: 454,
        amount: 232.96,
        date: "01/02/21",
        user_id: 83
      },
      {
        id: 455,
        amount: 349.43,
        date: "15/03/21",
        user_id: 82
      },
      {
        id: 456,
        amount: 241.79,
        date: "15/06/21",
        user_id: 5
      },
      {
        id: 457,
        amount: 432.54,
        date: "15/10/21",
        user_id: 7
      },
      {
        id: 458,
        amount: 166.47,
        date: "15/10/21",
        user_id: 88
      },
      {
        id: 459,
        amount: 281.13,
        date: "01/04/21",
        user_id: 78
      },
      {
        id: 460,
        amount: 407.46,
        date: "15/06/21",
        user_id: 35
      },
      {
        id: 461,
        amount: 96.84,
        date: "15/08/21",
        user_id: 71
      },
      {
        id: 462,
        amount: 103.13,
        date: "15/04/21",
        user_id: 87
      },
      {
        id: 463,
        amount: 249.87,
        date: "15/02/21",
        user_id: 49
      },
      {
        id: 464,
        amount: 221.65,
        date: "01/03/21",
        user_id: 83
      },
      {
        id: 465,
        amount: 156.22,
        date: "15/06/21",
        user_id: 77
      },
      {
        id: 466,
        amount: 287.56,
        date: "01/07/21",
        user_id: 21
      },
      {
        id: 467,
        amount: 276.16,
        date: "01/01/21",
        user_id: 28
      },
      {
        id: 468,
        amount: 54.54,
        date: "15/08/21",
        user_id: 62
      },
      {
        id: 469,
        amount: 457.47,
        date: "15/03/21",
        user_id: 85
      },
      {
        id: 470,
        amount: 168.35,
        date: "15/09/21",
        user_id: 32
      },
      {
        id: 471,
        amount: 164.02,
        date: "15/06/21",
        user_id: 29
      },
      {
        id: 472,
        amount: 494.91,
        date: "15/03/21",
        user_id: 16
      },
      {
        id: 473,
        amount: 353.42,
        date: "01/09/21",
        user_id: 55
      },
      {
        id: 474,
        amount: 479.35,
        date: "15/01/21",
        user_id: 21
      },
      {
        id: 475,
        amount: 499.88,
        date: "01/06/21",
        user_id: 21
      },
      {
        id: 476,
        amount: 140.87,
        date: "15/05/21",
        user_id: 87
      },
      {
        id: 477,
        amount: 471.72,
        date: "15/08/21",
        user_id: 24
      },
      {
        id: 478,
        amount: 446.98,
        date: "01/07/21",
        user_id: 72
      },
      {
        id: 479,
        amount: 271.23,
        date: "01/09/21",
        user_id: 84
      },
      {
        id: 480,
        amount: 92.94,
        date: "01/06/21",
        user_id: 21
      },
      {
        id: 481,
        amount: 184.53,
        date: "01/03/21",
        user_id: 17
      },
      {
        id: 482,
        amount: 175.34,
        date: "15/08/21",
        user_id: 27
      },
      {
        id: 483,
        amount: 148.33,
        date: "15/10/21",
        user_id: 49
      },
      {
        id: 484,
        amount: 471.12,
        date: "15/03/21",
        user_id: 32
      },
      {
        id: 485,
        amount: 203.82,
        date: "15/08/21",
        user_id: 14
      },
      {
        id: 486,
        amount: 272.21,
        date: "15/06/21",
        user_id: 96
      },
      {
        id: 487,
        amount: 170.06,
        date: "01/07/21",
        user_id: 64
      },
      {
        id: 488,
        amount: 324.32,
        date: "01/08/21",
        user_id: 8
      },
      {
        id: 489,
        amount: 372.26,
        date: "15/07/21",
        user_id: 16
      },
      {
        id: 490,
        amount: 499.45,
        date: "15/05/21",
        user_id: 8
      },
      {
        id: 491,
        amount: 382.27,
        date: "01/10/21",
        user_id: 62
      },
      {
        id: 492,
        amount: 492.53,
        date: "15/01/21",
        user_id: 15
      },
      {
        id: 493,
        amount: 480.45,
        date: "15/10/21",
        user_id: 44
      },
      {
        id: 494,
        amount: 222.92,
        date: "01/01/21",
        user_id: 95
      },
      {
        id: 495,
        amount: 241.41,
        date: "15/08/21",
        user_id: 14
      },
      {
        id: 496,
        amount: 223.04,
        date: "01/09/21",
        user_id: 56
      },
      {
        id: 497,
        amount: 73.26,
        date: "15/07/21",
        user_id: 12
      },
      {
        id: 498,
        amount: 468.61,
        date: "15/10/21",
        user_id: 24
      },
      {
        id: 499,
        amount: 387.6,
        date: "01/04/21",
        user_id: 8
      },
      {
        id: 500,
        amount: 390.45,
        date: "15/01/21",
        user_id: 49
      },
      {
        id: 501,
        amount: 485.25,
        date: "15/02/21",
        user_id: 35
      },
      {
        id: 502,
        amount: 64.01,
        date: "01/01/21",
        user_id: 29
      },
      {
        id: 503,
        amount: 81.75,
        date: "15/07/21",
        user_id: 49
      },
      {
        id: 504,
        amount: 381.41,
        date: "01/06/21",
        user_id: 34
      },
      {
        id: 505,
        amount: 334.61,
        date: "01/06/21",
        user_id: 39
      },
      {
        id: 506,
        amount: 124.97,
        date: "01/03/21",
        user_id: 26
      },
      {
        id: 507,
        amount: 386.38,
        date: "01/03/21",
        user_id: 21
      },
      {
        id: 508,
        amount: 160.61,
        date: "01/09/21",
        user_id: 56
      },
      {
        id: 509,
        amount: 488.49,
        date: "01/02/21",
        user_id: 65
      },
      {
        id: 510,
        amount: 161.94,
        date: "01/08/21",
        user_id: 99
      },
      {
        id: 511,
        amount: 113.29,
        date: "15/05/21",
        user_id: 22
      },
      {
        id: 512,
        amount: 170.93,
        date: "15/09/21",
        user_id: 31
      },
      {
        id: 513,
        amount: 67.63,
        date: "01/06/21",
        user_id: 72
      },
      {
        id: 514,
        amount: 127.9,
        date: "01/10/21",
        user_id: 79
      },
      {
        id: 515,
        amount: 282.72,
        date: "15/09/21",
        user_id: 56
      },
      {
        id: 516,
        amount: 277.15,
        date: "01/10/21",
        user_id: 41
      },
      {
        id: 517,
        amount: 347.43,
        date: "15/04/21",
        user_id: 18
      },
      {
        id: 518,
        amount: 182.69,
        date: "01/02/21",
        user_id: 5
      },
      {
        id: 519,
        amount: 74.66,
        date: "15/07/21",
        user_id: 91
      },
      {
        id: 520,
        amount: 66.53,
        date: "01/01/21",
        user_id: 67
      },
      {
        id: 521,
        amount: 134.12,
        date: "15/08/21",
        user_id: 9
      },
      {
        id: 522,
        amount: 378.62,
        date: "15/08/21",
        user_id: 17
      },
      {
        id: 523,
        amount: 255.97,
        date: "01/06/21",
        user_id: 62
      },
      {
        id: 524,
        amount: 400.63,
        date: "01/10/21",
        user_id: 43
      },
      {
        id: 525,
        amount: 331.44,
        date: "01/08/21",
        user_id: 38
      },
      {
        id: 526,
        amount: 348.44,
        date: "01/04/21",
        user_id: 41
      },
      {
        id: 527,
        amount: 336.4,
        date: "15/05/21",
        user_id: 61
      },
      {
        id: 528,
        amount: 441.61,
        date: "01/10/21",
        user_id: 8
      },
      {
        id: 529,
        amount: 143.85,
        date: "15/08/21",
        user_id: 19
      },
      {
        id: 530,
        amount: 282.25,
        date: "01/10/21",
        user_id: 34
      },
      {
        id: 531,
        amount: 382.13,
        date: "01/02/21",
        user_id: 5
      },
      {
        id: 532,
        amount: 52.37,
        date: "15/10/21",
        user_id: 28
      },
      {
        id: 533,
        amount: 148.91,
        date: "01/07/21",
        user_id: 78
      },
      {
        id: 534,
        amount: 390.32,
        date: "15/05/21",
        user_id: 96
      },
      {
        id: 535,
        amount: 424.74,
        date: "15/07/21",
        user_id: 43
      },
      {
        id: 536,
        amount: 248.67,
        date: "15/04/21",
        user_id: 46
      },
      {
        id: 537,
        amount: 455.2,
        date: "01/06/21",
        user_id: 48
      },
      {
        id: 538,
        amount: 146.2,
        date: "15/07/21",
        user_id: 24
      },
      {
        id: 539,
        amount: 429.39,
        date: "01/09/21",
        user_id: 33
      },
      {
        id: 540,
        amount: 116.94,
        date: "01/02/21",
        user_id: 7
      },
      {
        id: 541,
        amount: 180.87,
        date: "01/03/21",
        user_id: 13
      },
      {
        id: 542,
        amount: 136.41,
        date: "01/06/21",
        user_id: 31
      },
      {
        id: 543,
        amount: 327.9,
        date: "01/09/21",
        user_id: 69
      },
      {
        id: 544,
        amount: 373.72,
        date: "01/04/21",
        user_id: 31
      },
      {
        id: 545,
        amount: 401.63,
        date: "01/01/21",
        user_id: 38
      },
      {
        id: 546,
        amount: 463.83,
        date: "15/03/21",
        user_id: 59
      },
      {
        id: 547,
        amount: 252.46,
        date: "15/04/21",
        user_id: 11
      },
      {
        id: 548,
        amount: 102.3,
        date: "15/01/21",
        user_id: 31
      },
      {
        id: 549,
        amount: 388.78,
        date: "15/10/21",
        user_id: 28
      },
      {
        id: 550,
        amount: 121.21,
        date: "15/01/21",
        user_id: 54
      },
      {
        id: 551,
        amount: 366.09,
        date: "01/08/21",
        user_id: 41
      },
      {
        id: 552,
        amount: 215.2,
        date: "15/08/21",
        user_id: 5
      },
      {
        id: 553,
        amount: 58.88,
        date: "01/01/21",
        user_id: 36
      },
      {
        id: 554,
        amount: 346.76,
        date: "15/05/21",
        user_id: 18
      },
      {
        id: 555,
        amount: 427.46,
        date: "01/02/21",
        user_id: 78
      },
      {
        id: 556,
        amount: 128.8,
        date: "15/07/21",
        user_id: 92
      },
      {
        id: 557,
        amount: 436.93,
        date: "15/07/21",
        user_id: 35
      },
      {
        id: 558,
        amount: 51.15,
        date: "15/10/21",
        user_id: 48
      },
      {
        id: 559,
        amount: 453.73,
        date: "15/04/21",
        user_id: 25
      },
      {
        id: 560,
        amount: 429.71,
        date: "15/06/21",
        user_id: 89
      },
      {
        id: 561,
        amount: 480.48,
        date: "15/01/21",
        user_id: 47
      },
      {
        id: 562,
        amount: 346.04,
        date: "01/10/21",
        user_id: 79
      },
      {
        id: 563,
        amount: 164.07,
        date: "15/02/21",
        user_id: 98
      },
      {
        id: 564,
        amount: 57.82,
        date: "01/04/21",
        user_id: 101
      },
      {
        id: 565,
        amount: 420.96,
        date: "01/09/21",
        user_id: 86
      },
      {
        id: 566,
        amount: 147.5,
        date: "15/10/21",
        user_id: 92
      },
      {
        id: 567,
        amount: 74.48,
        date: "01/02/21",
        user_id: 29
      },
      {
        id: 568,
        amount: 330.64,
        date: "01/02/21",
        user_id: 47
      },
      {
        id: 569,
        amount: 196.7,
        date: "15/05/21",
        user_id: 23
      },
      {
        id: 570,
        amount: 271.57,
        date: "15/02/21",
        user_id: 75
      },
      {
        id: 571,
        amount: 320.36,
        date: "01/07/21",
        user_id: 54
      },
      {
        id: 572,
        amount: 214.07,
        date: "15/01/21",
        user_id: 66
      },
      {
        id: 573,
        amount: 342.42,
        date: "15/01/21",
        user_id: 86
      },
      {
        id: 574,
        amount: 216.2,
        date: "15/09/21",
        user_id: 61
      },
      {
        id: 575,
        amount: 462.99,
        date: "01/03/21",
        user_id: 23
      },
      {
        id: 576,
        amount: 74.83,
        date: "15/01/21",
        user_id: 74
      },
      {
        id: 577,
        amount: 279.43,
        date: "01/05/21",
        user_id: 16
      },
      {
        id: 578,
        amount: 491.78,
        date: "15/01/21",
        user_id: 82
      },
      {
        id: 579,
        amount: 67.84,
        date: "01/02/21",
        user_id: 67
      },
      {
        id: 580,
        amount: 102.15,
        date: "15/08/21",
        user_id: 51
      },
      {
        id: 581,
        amount: 265.93,
        date: "15/03/21",
        user_id: 12
      },
      {
        id: 582,
        amount: 62.55,
        date: "15/05/21",
        user_id: 73
      },
      {
        id: 583,
        amount: 435.4,
        date: "15/06/21",
        user_id: 8
      },
      {
        id: 584,
        amount: 182.3,
        date: "01/10/21",
        user_id: 25
      },
      {
        id: 585,
        amount: 366.68,
        date: "15/01/21",
        user_id: 89
      },
      {
        id: 586,
        amount: 363.01,
        date: "15/01/21",
        user_id: 18
      },
      {
        id: 587,
        amount: 324.8,
        date: "01/08/21",
        user_id: 52
      },
      {
        id: 588,
        amount: 418.42,
        date: "01/07/21",
        user_id: 24
      },
      {
        id: 589,
        amount: 109.58,
        date: "15/10/21",
        user_id: 92
      },
      {
        id: 590,
        amount: 135.45,
        date: "01/05/21",
        user_id: 55
      },
      {
        id: 591,
        amount: 445.96,
        date: "01/09/21",
        user_id: 87
      },
      {
        id: 592,
        amount: 266,
        date: "01/04/21",
        user_id: 78
      },
      {
        id: 593,
        amount: 199.95,
        date: "01/08/21",
        user_id: 33
      },
      {
        id: 594,
        amount: 421.7,
        date: "01/04/21",
        user_id: 9
      },
      {
        id: 595,
        amount: 60.08,
        date: "15/03/21",
        user_id: 54
      },
      {
        id: 596,
        amount: 244.39,
        date: "15/08/21",
        user_id: 7
      },
      {
        id: 597,
        amount: 315.65,
        date: "15/04/21",
        user_id: 86
      },
      {
        id: 598,
        amount: 75.74,
        date: "15/08/21",
        user_id: 31
      },
      {
        id: 599,
        amount: 148.17,
        date: "15/09/21",
        user_id: 69
      },
      {
        id: 600,
        amount: 425.83,
        date: "15/09/21",
        user_id: 73
      },
      {
        id: 601,
        amount: 244.94,
        date: "15/04/21",
        user_id: 58
      },
      {
        id: 602,
        amount: 487.32,
        date: "15/08/21",
        user_id: 5
      },
      {
        id: 603,
        amount: 437.5,
        date: "01/08/21",
        user_id: 71
      },
      {
        id: 604,
        amount: 382.65,
        date: "15/04/21",
        user_id: 81
      },
      {
        id: 605,
        amount: 159.78,
        date: "01/08/21",
        user_id: 68
      },
      {
        id: 606,
        amount: 459.51,
        date: "01/06/21",
        user_id: 91
      },
      {
        id: 607,
        amount: 207.32,
        date: "01/09/21",
        user_id: 41
      },
      {
        id: 608,
        amount: 491.35,
        date: "01/09/21",
        user_id: 23
      },
      {
        id: 609,
        amount: 107.17,
        date: "15/06/21",
        user_id: 82
      },
      {
        id: 610,
        amount: 175.98,
        date: "01/01/21",
        user_id: 38
      },
      {
        id: 611,
        amount: 230.58,
        date: "01/01/21",
        user_id: 66
      },
      {
        id: 612,
        amount: 81.49,
        date: "01/05/21",
        user_id: 41
      },
      {
        id: 613,
        amount: 255.47,
        date: "15/03/21",
        user_id: 6
      },
      {
        id: 614,
        amount: 429.92,
        date: "15/04/21",
        user_id: 63
      },
      {
        id: 615,
        amount: 126.01,
        date: "01/03/21",
        user_id: 84
      },
      {
        id: 616,
        amount: 112.12,
        date: "15/10/21",
        user_id: 91
      },
      {
        id: 617,
        amount: 284.72,
        date: "15/05/21",
        user_id: 46
      },
      {
        id: 618,
        amount: 268.13,
        date: "01/01/21",
        user_id: 14
      },
      {
        id: 619,
        amount: 246.68,
        date: "01/10/21",
        user_id: 59
      },
      {
        id: 620,
        amount: 413.4,
        date: "01/09/21",
        user_id: 14
      },
      {
        id: 621,
        amount: 325.59,
        date: "01/10/21",
        user_id: 14
      },
      {
        id: 622,
        amount: 219.05,
        date: "15/07/21",
        user_id: 83
      },
      {
        id: 623,
        amount: 280.71,
        date: "01/09/21",
        user_id: 7
      },
      {
        id: 624,
        amount: 367.65,
        date: "15/03/21",
        user_id: 96
      },
      {
        id: 625,
        amount: 95.63,
        date: "15/03/21",
        user_id: 49
      },
      {
        id: 626,
        amount: 262.77,
        date: "15/07/21",
        user_id: 38
      },
      {
        id: 627,
        amount: 312.35,
        date: "01/09/21",
        user_id: 57
      },
      {
        id: 628,
        amount: 71,
        date: "01/02/21",
        user_id: 82
      },
      {
        id: 629,
        amount: 71.23,
        date: "01/08/21",
        user_id: 13
      },
      {
        id: 630,
        amount: 472.61,
        date: "15/08/21",
        user_id: 39
      },
      {
        id: 631,
        amount: 122.37,
        date: "15/02/21",
        user_id: 73
      },
      {
        id: 632,
        amount: 179.1,
        date: "15/05/21",
        user_id: 7
      },
      {
        id: 633,
        amount: 329.72,
        date: "01/01/21",
        user_id: 21
      },
      {
        id: 634,
        amount: 163.32,
        date: "01/07/21",
        user_id: 69
      },
      {
        id: 635,
        amount: 442.2,
        date: "15/04/21",
        user_id: 35
      },
      {
        id: 636,
        amount: 347.51,
        date: "01/09/21",
        user_id: 62
      },
      {
        id: 637,
        amount: 192.12,
        date: "01/01/21",
        user_id: 74
      },
      {
        id: 638,
        amount: 156.13,
        date: "01/01/21",
        user_id: 5
      },
      {
        id: 639,
        amount: 326.59,
        date: "01/01/21",
        user_id: 31
      },
      {
        id: 640,
        amount: 208.52,
        date: "15/08/21",
        user_id: 83
      },
      {
        id: 641,
        amount: 483.68,
        date: "15/08/21",
        user_id: 54
      },
      {
        id: 642,
        amount: 158.83,
        date: "01/02/21",
        user_id: 32
      },
      {
        id: 643,
        amount: 436.6,
        date: "15/10/21",
        user_id: 59
      },
      {
        id: 644,
        amount: 411.66,
        date: "01/06/21",
        user_id: 44
      },
      {
        id: 645,
        amount: 387.1,
        date: "01/01/21",
        user_id: 12
      },
      {
        id: 646,
        amount: 155.93,
        date: "15/07/21",
        user_id: 31
      },
      {
        id: 647,
        amount: 435.91,
        date: "15/08/21",
        user_id: 94
      },
      {
        id: 648,
        amount: 93.99,
        date: "15/02/21",
        user_id: 18
      },
      {
        id: 649,
        amount: 93.17,
        date: "15/03/21",
        user_id: 4
      },
      {
        id: 650,
        amount: 308.92,
        date: "01/05/21",
        user_id: 32
      },
      {
        id: 651,
        amount: 311.39,
        date: "15/10/21",
        user_id: 94
      },
      {
        id: 652,
        amount: 378.59,
        date: "01/10/21",
        user_id: 21
      },
      {
        id: 653,
        amount: 306.82,
        date: "15/05/21",
        user_id: 52
      },
      {
        id: 654,
        amount: 96.31,
        date: "15/07/21",
        user_id: 87
      },
      {
        id: 655,
        amount: 99.51,
        date: "01/09/21",
        user_id: 42
      },
      {
        id: 656,
        amount: 62.22,
        date: "15/09/21",
        user_id: 58
      },
      {
        id: 657,
        amount: 482.13,
        date: "01/05/21",
        user_id: 9
      },
      {
        id: 658,
        amount: 134.11,
        date: "15/05/21",
        user_id: 43
      },
      {
        id: 659,
        amount: 293.27,
        date: "01/10/21",
        user_id: 53
      },
      {
        id: 660,
        amount: 155.1,
        date: "15/01/21",
        user_id: 16
      },
      {
        id: 661,
        amount: 486.72,
        date: "15/10/21",
        user_id: 55
      },
      {
        id: 662,
        amount: 382.45,
        date: "15/06/21",
        user_id: 25
      },
      {
        id: 663,
        amount: 79.66,
        date: "01/04/21",
        user_id: 87
      },
      {
        id: 664,
        amount: 339.56,
        date: "01/06/21",
        user_id: 23
      },
      {
        id: 665,
        amount: 173.32,
        date: "01/03/21",
        user_id: 6
      },
      {
        id: 666,
        amount: 295.65,
        date: "01/01/21",
        user_id: 86
      },
      {
        id: 667,
        amount: 293.02,
        date: "01/02/21",
        user_id: 94
      },
      {
        id: 668,
        amount: 461.14,
        date: "15/08/21",
        user_id: 1
      },
      {
        id: 669,
        amount: 400.29,
        date: "01/02/21",
        user_id: 95
      },
      {
        id: 670,
        amount: 325.41,
        date: "01/03/21",
        user_id: 96
      },
      {
        id: 671,
        amount: 73.33,
        date: "01/02/21",
        user_id: 44
      },
      {
        id: 672,
        amount: 150.86,
        date: "15/05/21",
        user_id: 87
      },
      {
        id: 673,
        amount: 339.18,
        date: "01/05/21",
        user_id: 58
      },
      {
        id: 674,
        amount: 331.19,
        date: "01/03/21",
        user_id: 74
      },
      {
        id: 675,
        amount: 177.11,
        date: "01/01/21",
        user_id: 77
      },
      {
        id: 676,
        amount: 361.02,
        date: "15/04/21",
        user_id: 81
      },
      {
        id: 677,
        amount: 205.55,
        date: "15/06/21",
        user_id: 3
      },
      {
        id: 678,
        amount: 413.56,
        date: "15/09/21",
        user_id: 32
      },
      {
        id: 679,
        amount: 79.92,
        date: "15/09/21",
        user_id: 81
      },
      {
        id: 680,
        amount: 126.17,
        date: "15/07/21",
        user_id: 81
      },
      {
        id: 681,
        amount: 250.65,
        date: "15/01/21",
        user_id: 24
      },
      {
        id: 682,
        amount: 275.03,
        date: "15/02/21",
        user_id: 11
      },
      {
        id: 683,
        amount: 152.76,
        date: "15/08/21",
        user_id: 85
      },
      {
        id: 684,
        amount: 333.32,
        date: "15/08/21",
        user_id: 91
      },
      {
        id: 685,
        amount: 237.75,
        date: "15/01/21",
        user_id: 16
      },
      {
        id: 686,
        amount: 495.07,
        date: "01/01/21",
        user_id: 4
      },
      {
        id: 687,
        amount: 449.16,
        date: "01/01/21",
        user_id: 23
      },
      {
        id: 688,
        amount: 238.56,
        date: "01/02/21",
        user_id: 81
      },
      {
        id: 689,
        amount: 497.83,
        date: "15/04/21",
        user_id: 92
      },
      {
        id: 690,
        amount: 434.09,
        date: "15/05/21",
        user_id: 89
      },
      {
        id: 691,
        amount: 82.32,
        date: "15/10/21",
        user_id: 16
      },
      {
        id: 692,
        amount: 294.42,
        date: "15/09/21",
        user_id: 15
      },
      {
        id: 693,
        amount: 242.82,
        date: "15/09/21",
        user_id: 31
      },
      {
        id: 694,
        amount: 377.68,
        date: "01/07/21",
        user_id: 89
      },
      {
        id: 695,
        amount: 85.44,
        date: "01/05/21",
        user_id: 14
      },
      {
        id: 696,
        amount: 203.66,
        date: "15/07/21",
        user_id: 93
      },
      {
        id: 697,
        amount: 200.9,
        date: "15/08/21",
        user_id: 78
      },
      {
        id: 698,
        amount: 240.1,
        date: "15/09/21",
        user_id: 25
      },
      {
        id: 699,
        amount: 446.62,
        date: "01/03/21",
        user_id: 13
      },
      {
        id: 700,
        amount: 72.56,
        date: "15/07/21",
        user_id: 12
      },
      {
        id: 701,
        amount: 410.5,
        date: "15/09/21",
        user_id: 87
      },
      {
        id: 702,
        amount: 256.28,
        date: "15/07/21",
        user_id: 13
      },
      {
        id: 703,
        amount: 56.55,
        date: "15/08/21",
        user_id: 56
      },
      {
        id: 704,
        amount: 57.03,
        date: "01/01/21",
        user_id: 38
      },
      {
        id: 705,
        amount: 73.12,
        date: "15/01/21",
        user_id: 55
      },
      {
        id: 706,
        amount: 166.69,
        date: "15/03/21",
        user_id: 92
      },
      {
        id: 707,
        amount: 131.35,
        date: "15/10/21",
        user_id: 6
      },
      {
        id: 708,
        amount: 140.86,
        date: "01/05/21",
        user_id: 8
      },
      {
        id: 709,
        amount: 286.19,
        date: "15/06/21",
        user_id: 14
      },
      {
        id: 710,
        amount: 253.96,
        date: "15/07/21",
        user_id: 85
      },
      {
        id: 711,
        amount: 166.7,
        date: "01/10/21",
        user_id: 68
      },
      {
        id: 712,
        amount: 488.73,
        date: "15/08/21",
        user_id: 91
      },
      {
        id: 713,
        amount: 266.47,
        date: "01/07/21",
        user_id: 5
      },
      {
        id: 714,
        amount: 308.03,
        date: "15/08/21",
        user_id: 23
      },
      {
        id: 715,
        amount: 105.83,
        date: "15/04/21",
        user_id: 91
      },
      {
        id: 716,
        amount: 405.78,
        date: "15/05/21",
        user_id: 85
      },
      {
        id: 717,
        amount: 383.83,
        date: "01/04/21",
        user_id: 74
      },
      {
        id: 718,
        amount: 279.14,
        date: "01/06/21",
        user_id: 87
      },
      {
        id: 719,
        amount: 182.39,
        date: "15/03/21",
        user_id: 34
      },
      {
        id: 720,
        amount: 381.13,
        date: "15/10/21",
        user_id: 17
      },
      {
        id: 721,
        amount: 114.07,
        date: "01/02/21",
        user_id: 12
      },
      {
        id: 722,
        amount: 429.18,
        date: "15/04/21",
        user_id: 66
      },
      {
        id: 723,
        amount: 111.25,
        date: "01/04/21",
        user_id: 98
      },
      {
        id: 724,
        amount: 103.24,
        date: "01/05/21",
        user_id: 43
      },
      {
        id: 725,
        amount: 74.28,
        date: "15/09/21",
        user_id: 12
      },
      {
        id: 726,
        amount: 461.63,
        date: "15/06/21",
        user_id: 16
      },
      {
        id: 727,
        amount: 221.26,
        date: "01/01/21",
        user_id: 45
      },
      {
        id: 728,
        amount: 204.69,
        date: "15/09/21",
        user_id: 31
      },
      {
        id: 729,
        amount: 350.36,
        date: "15/07/21",
        user_id: 67
      },
      {
        id: 730,
        amount: 449.84,
        date: "15/02/21",
        user_id: 21
      },
      {
        id: 731,
        amount: 448.15,
        date: "15/07/21",
        user_id: 81
      },
      {
        id: 732,
        amount: 299.66,
        date: "15/10/21",
        user_id: 1
      },
      {
        id: 733,
        amount: 127.12,
        date: "15/08/21",
        user_id: 28
      },
      {
        id: 734,
        amount: 380.33,
        date: "01/04/21",
        user_id: 32
      },
      {
        id: 735,
        amount: 175.8,
        date: "15/07/21",
        user_id: 16
      },
      {
        id: 736,
        amount: 331.85,
        date: "15/08/21",
        user_id: 25
      },
      {
        id: 737,
        amount: 206.82,
        date: "15/04/21",
        user_id: 62
      },
      {
        id: 738,
        amount: 173.93,
        date: "15/10/21",
        user_id: 28
      },
      {
        id: 739,
        amount: 224.23,
        date: "15/01/21",
        user_id: 74
      },
      {
        id: 740,
        amount: 339.92,
        date: "15/04/21",
        user_id: 64
      },
      {
        id: 741,
        amount: 367.31,
        date: "15/04/21",
        user_id: 21
      },
      {
        id: 742,
        amount: 67.37,
        date: "01/07/21",
        user_id: 53
      },
      {
        id: 743,
        amount: 151.77,
        date: "15/10/21",
        user_id: 64
      },
      {
        id: 744,
        amount: 459.09,
        date: "15/06/21",
        user_id: 19
      },
      {
        id: 745,
        amount: 209.25,
        date: "15/08/21",
        user_id: 51
      },
      {
        id: 746,
        amount: 137.41,
        date: "01/03/21",
        user_id: 24
      },
      {
        id: 747,
        amount: 455.01,
        date: "15/07/21",
        user_id: 75
      },
      {
        id: 748,
        amount: 481.61,
        date: "15/01/21",
        user_id: 67
      },
      {
        id: 749,
        amount: 227.88,
        date: "15/07/21",
        user_id: 89
      },
      {
        id: 750,
        amount: 326.01,
        date: "01/07/21",
        user_id: 11
      },
      {
        id: 751,
        amount: 160.19,
        date: "15/02/21",
        user_id: 61
      },
      {
        id: 752,
        amount: 124.85,
        date: "01/01/21",
        user_id: 74
      },
      {
        id: 753,
        amount: 430.33,
        date: "01/03/21",
        user_id: 48
      },
      {
        id: 754,
        amount: 215.47,
        date: "01/05/21",
        user_id: 36
      },
      {
        id: 755,
        amount: 208.6,
        date: "15/05/21",
        user_id: 91
      },
      {
        id: 756,
        amount: 118.15,
        date: "01/01/21",
        user_id: 88
      },
      {
        id: 757,
        amount: 285.5,
        date: "01/01/21",
        user_id: 24
      },
      {
        id: 758,
        amount: 194.07,
        date: "01/06/21",
        user_id: 81
      },
      {
        id: 759,
        amount: 145.09,
        date: "15/10/21",
        user_id: 47
      },
      {
        id: 760,
        amount: 370.17,
        date: "15/09/21",
        user_id: 91
      },
      {
        id: 761,
        amount: 219.4,
        date: "15/02/21",
        user_id: 33
      },
      {
        id: 762,
        amount: 281.97,
        date: "15/07/21",
        user_id: 95
      },
      {
        id: 763,
        amount: 97.41,
        date: "15/04/21",
        user_id: 56
      },
      {
        id: 764,
        amount: 167.12,
        date: "15/06/21",
        user_id: 34
      },
      {
        id: 765,
        amount: 438.51,
        date: "01/06/21",
        user_id: 27
      },
      {
        id: 766,
        amount: 253.57,
        date: "15/09/21",
        user_id: 55
      },
      {
        id: 767,
        amount: 380.89,
        date: "15/05/21",
        user_id: 48
      },
      {
        id: 768,
        amount: 172.58,
        date: "15/10/21",
        user_id: 78
      },
      {
        id: 769,
        amount: 243.17,
        date: "15/01/21",
        user_id: 21
      },
      {
        id: 770,
        amount: 396.29,
        date: "15/01/21",
        user_id: 63
      },
      {
        id: 771,
        amount: 375.1,
        date: "01/03/21",
        user_id: 74
      },
      {
        id: 772,
        amount: 169.23,
        date: "15/10/21",
        user_id: 31
      },
      {
        id: 773,
        amount: 121.32,
        date: "01/10/21",
        user_id: 91
      },
      {
        id: 774,
        amount: 352.4,
        date: "01/03/21",
        user_id: 53
      },
      {
        id: 775,
        amount: 470.71,
        date: "01/03/21",
        user_id: 39
      },
      {
        id: 776,
        amount: 264.04,
        date: "01/04/21",
        user_id: 83
      },
      {
        id: 777,
        amount: 172.26,
        date: "15/01/21",
        user_id: 71
      },
      {
        id: 778,
        amount: 251.63,
        date: "15/10/21",
        user_id: 26
      },
      {
        id: 779,
        amount: 81.22,
        date: "01/09/21",
        user_id: 6
      },
      {
        id: 780,
        amount: 134.88,
        date: "15/08/21",
        user_id: 91
      },
      {
        id: 781,
        amount: 270.79,
        date: "01/10/21",
        user_id: 28
      },
      {
        id: 782,
        amount: 82.5,
        date: "01/06/21",
        user_id: 52
      },
      {
        id: 783,
        amount: 74.92,
        date: "01/10/21",
        user_id: 36
      },
      {
        id: 784,
        amount: 130.34,
        date: "15/08/21",
        user_id: 26
      },
      {
        id: 785,
        amount: 447.26,
        date: "01/02/21",
        user_id: 76
      },
      {
        id: 786,
        amount: 452.02,
        date: "15/02/21",
        user_id: 73
      },
      {
        id: 787,
        amount: 336.2,
        date: "15/03/21",
        user_id: 19
      },
      {
        id: 788,
        amount: 198.37,
        date: "15/03/21",
        user_id: 92
      },
      {
        id: 789,
        amount: 251.26,
        date: "01/02/21",
        user_id: 91
      },
      {
        id: 790,
        amount: 451.87,
        date: "01/01/21",
        user_id: 65
      },
      {
        id: 791,
        amount: 225.31,
        date: "01/04/21",
        user_id: 95
      },
      {
        id: 792,
        amount: 115.92,
        date: "15/02/21",
        user_id: 59
      },
      {
        id: 793,
        amount: 303.69,
        date: "15/09/21",
        user_id: 46
      },
      {
        id: 794,
        amount: 182.2,
        date: "15/08/21",
        user_id: 31
      },
      {
        id: 795,
        amount: 266.68,
        date: "01/06/21",
        user_id: 95
      },
      {
        id: 796,
        amount: 290.44,
        date: "01/07/21",
        user_id: 32
      },
      {
        id: 797,
        amount: 135.85,
        date: "01/06/21",
        user_id: 16
      },
      {
        id: 798,
        amount: 91.61,
        date: "01/03/21",
        user_id: 24
      },
      {
        id: 799,
        amount: 307.59,
        date: "01/06/21",
        user_id: 93
      },
      {
        id: 800,
        amount: 435.24,
        date: "01/07/21",
        user_id: 4
      },
      {
        id: 801,
        amount: 95.57,
        date: "01/04/21",
        user_id: 33
      },
      {
        id: 802,
        amount: 212.65,
        date: "15/10/21",
        user_id: 28
      },
      {
        id: 803,
        amount: 316.57,
        date: "15/09/21",
        user_id: 76
      },
      {
        id: 804,
        amount: 61.74,
        date: "01/04/21",
        user_id: 73
      },
      {
        id: 805,
        amount: 288.34,
        date: "15/03/21",
        user_id: 89
      },
      {
        id: 806,
        amount: 405.12,
        date: "15/02/21",
        user_id: 6
      },
      {
        id: 807,
        amount: 351.99,
        date: "01/05/21",
        user_id: 9
      },
      {
        id: 808,
        amount: 131.19,
        date: "15/03/21",
        user_id: 56
      },
      {
        id: 809,
        amount: 59.86,
        date: "15/07/21",
        user_id: 78
      },
      {
        id: 810,
        amount: 447.11,
        date: "01/01/21",
        user_id: 82
      },
      {
        id: 811,
        amount: 244.66,
        date: "01/04/21",
        user_id: 99
      },
      {
        id: 812,
        amount: 99.58,
        date: "01/01/21",
        user_id: 94
      },
      {
        id: 813,
        amount: 82.93,
        date: "15/08/21",
        user_id: 15
      },
      {
        id: 814,
        amount: 250.74,
        date: "15/09/21",
        user_id: 29
      },
      {
        id: 815,
        amount: 327.79,
        date: "15/09/21",
        user_id: 98
      },
      {
        id: 816,
        amount: 313.19,
        date: "15/10/21",
        user_id: 6
      },
      {
        id: 817,
        amount: 472.25,
        date: "01/08/21",
        user_id: 75
      },
      {
        id: 818,
        amount: 59.59,
        date: "15/09/21",
        user_id: 96
      },
      {
        id: 819,
        amount: 273.78,
        date: "15/04/21",
        user_id: 39
      },
      {
        id: 820,
        amount: 192.22,
        date: "15/09/21",
        user_id: 62
      },
      {
        id: 821,
        amount: 383.78,
        date: "01/05/21",
        user_id: 41
      },
      {
        id: 822,
        amount: 152.31,
        date: "01/08/21",
        user_id: 72
      },
      {
        id: 823,
        amount: 123.53,
        date: "15/05/21",
        user_id: 15
      },
      {
        id: 824,
        amount: 462.37,
        date: "15/06/21",
        user_id: 22
      },
      {
        id: 825,
        amount: 387.47,
        date: "01/10/21",
        user_id: 31
      },
      {
        id: 826,
        amount: 454.73,
        date: "15/03/21",
        user_id: 71
      },
      {
        id: 827,
        amount: 74.01,
        date: "15/07/21",
        user_id: 29
      },
      {
        id: 828,
        amount: 57.19,
        date: "01/08/21",
        user_id: 23
      },
      {
        id: 829,
        amount: 125.37,
        date: "01/03/21",
        user_id: 43
      },
      {
        id: 830,
        amount: 351.24,
        date: "15/10/21",
        user_id: 57
      },
      {
        id: 831,
        amount: 241.84,
        date: "15/10/21",
        user_id: 93
      },
      {
        id: 832,
        amount: 260.45,
        date: "15/01/21",
        user_id: 19
      },
      {
        id: 833,
        amount: 229.37,
        date: "15/02/21",
        user_id: 59
      },
      {
        id: 834,
        amount: 116.03,
        date: "01/03/21",
        user_id: 46
      },
      {
        id: 835,
        amount: 54.78,
        date: "15/08/21",
        user_id: 65
      },
      {
        id: 836,
        amount: 222.12,
        date: "15/07/21",
        user_id: 85
      },
      {
        id: 837,
        amount: 336.34,
        date: "01/10/21",
        user_id: 14
      },
      {
        id: 838,
        amount: 386.91,
        date: "15/05/21",
        user_id: 39
      },
      {
        id: 839,
        amount: 99.87,
        date: "15/04/21",
        user_id: 21
      },
      {
        id: 840,
        amount: 317.31,
        date: "01/05/21",
        user_id: 97
      },
      {
        id: 841,
        amount: 109.84,
        date: "01/07/21",
        user_id: 23
      },
      {
        id: 842,
        amount: 56.84,
        date: "01/02/21",
        user_id: 95
      },
      {
        id: 843,
        amount: 226.97,
        date: "15/05/21",
        user_id: 41
      },
      {
        id: 844,
        amount: 416.47,
        date: "15/08/21",
        user_id: 54
      },
      {
        id: 845,
        amount: 359.55,
        date: "15/06/21",
        user_id: 72
      },
      {
        id: 846,
        amount: 189.08,
        date: "01/05/21",
        user_id: 74
      },
      {
        id: 847,
        amount: 133.6,
        date: "01/03/21",
        user_id: 84
      },
      {
        id: 848,
        amount: 414.3,
        date: "15/04/21",
        user_id: 55
      },
      {
        id: 849,
        amount: 311.67,
        date: "01/10/21",
        user_id: 89
      },
      {
        id: 850,
        amount: 301.14,
        date: "15/02/21",
        user_id: 1
      },
      {
        id: 851,
        amount: 153.31,
        date: "01/06/21",
        user_id: 78
      },
      {
        id: 852,
        amount: 163.47,
        date: "15/07/21",
        user_id: 77
      },
      {
        id: 853,
        amount: 234.2,
        date: "15/08/21",
        user_id: 12
      },
      {
        id: 854,
        amount: 55.38,
        date: "15/10/21",
        user_id: 8
      },
      {
        id: 855,
        amount: 488.25,
        date: "01/02/21",
        user_id: 63
      },
      {
        id: 856,
        amount: 265.79,
        date: "01/09/21",
        user_id: 22
      },
      {
        id: 857,
        amount: 163.13,
        date: "01/04/21",
        user_id: 72
      },
      {
        id: 858,
        amount: 269.85,
        date: "15/01/21",
        user_id: 26
      },
      {
        id: 859,
        amount: 405.37,
        date: "01/05/21",
        user_id: 43
      },
      {
        id: 860,
        amount: 73.17,
        date: "01/06/21",
        user_id: 46
      },
      {
        id: 861,
        amount: 112.68,
        date: "15/04/21",
        user_id: 68
      },
      {
        id: 862,
        amount: 494.04,
        date: "15/09/21",
        user_id: 96
      },
      {
        id: 863,
        amount: 92.69,
        date: "15/01/21",
        user_id: 18
      },
      {
        id: 864,
        amount: 194.97,
        date: "01/05/21",
        user_id: 38
      },
      {
        id: 865,
        amount: 381.78,
        date: "15/09/21",
        user_id: 59
      },
      {
        id: 866,
        amount: 383.33,
        date: "15/01/21",
        user_id: 24
      },
      {
        id: 867,
        amount: 216.4,
        date: "01/10/21",
        user_id: 42
      },
      {
        id: 868,
        amount: 316.56,
        date: "15/03/21",
        user_id: 87
      },
      {
        id: 869,
        amount: 57.86,
        date: "15/05/21",
        user_id: 4
      },
      {
        id: 870,
        amount: 216.44,
        date: "15/09/21",
        user_id: 92
      },
      {
        id: 871,
        amount: 294.43,
        date: "15/03/21",
        user_id: 21
      },
      {
        id: 872,
        amount: 331.8,
        date: "01/09/21",
        user_id: 94
      },
      {
        id: 873,
        amount: 64.31,
        date: "01/05/21",
        user_id: 36
      },
      {
        id: 874,
        amount: 248.12,
        date: "01/06/21",
        user_id: 4
      },
      {
        id: 875,
        amount: 428.29,
        date: "15/08/21",
        user_id: 61
      },
      {
        id: 876,
        amount: 337.99,
        date: "15/08/21",
        user_id: 49
      },
      {
        id: 877,
        amount: 62.19,
        date: "15/09/21",
        user_id: 85
      },
      {
        id: 878,
        amount: 367.17,
        date: "01/10/21",
        user_id: 76
      },
      {
        id: 879,
        amount: 157.37,
        date: "01/10/21",
        user_id: 6
      },
      {
        id: 880,
        amount: 110.46,
        date: "15/02/21",
        user_id: 53
      },
      {
        id: 881,
        amount: 159.69,
        date: "15/08/21",
        user_id: 81
      },
      {
        id: 882,
        amount: 406.9,
        date: "01/04/21",
        user_id: 93
      },
      {
        id: 883,
        amount: 375.63,
        date: "15/07/21",
        user_id: 21
      },
      {
        id: 884,
        amount: 412.1,
        date: "15/07/21",
        user_id: 34
      },
      {
        id: 885,
        amount: 347.74,
        date: "01/01/21",
        user_id: 12
      },
      {
        id: 886,
        amount: 232.23,
        date: "01/01/21",
        user_id: 75
      },
      {
        id: 887,
        amount: 243.03,
        date: "15/01/21",
        user_id: 35
      },
      {
        id: 888,
        amount: 437.95,
        date: "01/09/21",
        user_id: 69
      },
      {
        id: 889,
        amount: 65.47,
        date: "15/01/21",
        user_id: 51
      },
      {
        id: 890,
        amount: 284.14,
        date: "01/09/21",
        user_id: 69
      },
      {
        id: 891,
        amount: 291.28,
        date: "01/08/21",
        user_id: 6
      },
      {
        id: 892,
        amount: 368.48,
        date: "15/03/21",
        user_id: 71
      },
      {
        id: 893,
        amount: 290.79,
        date: "15/05/21",
        user_id: 56
      },
      {
        id: 894,
        amount: 390.09,
        date: "01/08/21",
        user_id: 2
      },
      {
        id: 895,
        amount: 195.54,
        date: "15/04/21",
        user_id: 57
      },
      {
        id: 896,
        amount: 170.93,
        date: "01/04/21",
        user_id: 43
      },
      {
        id: 897,
        amount: 454.05,
        date: "15/08/21",
        user_id: 18
      },
      {
        id: 898,
        amount: 399.44,
        date: "01/09/21",
        user_id: 93
      },
      {
        id: 899,
        amount: 162.43,
        date: "15/04/21",
        user_id: 9
      },
      {
        id: 900,
        amount: 195.22,
        date: "01/03/21",
        user_id: 83
      },
      {
        id: 901,
        amount: 168.87,
        date: "01/09/21",
        user_id: 88
      },
      {
        id: 902,
        amount: 72.79,
        date: "01/10/21",
        user_id: 1
      },
      {
        id: 903,
        amount: 123.22,
        date: "01/05/21",
        user_id: 81
      },
      {
        id: 904,
        amount: 186.88,
        date: "15/08/21",
        user_id: 12
      },
      {
        id: 905,
        amount: 366.65,
        date: "01/10/21",
        user_id: 33
      },
      {
        id: 906,
        amount: 252.71,
        date: "15/09/21",
        user_id: 53
      },
      {
        id: 907,
        amount: 480.61,
        date: "01/07/21",
        user_id: 9
      },
      {
        id: 908,
        amount: 399.45,
        date: "01/10/21",
        user_id: 101
      },
      {
        id: 909,
        amount: 432.88,
        date: "01/01/21",
        user_id: 58
      },
      {
        id: 910,
        amount: 407.21,
        date: "01/07/21",
        user_id: 37
      },
      {
        id: 911,
        amount: 178.96,
        date: "01/08/21",
        user_id: 21
      },
      {
        id: 912,
        amount: 81.41,
        date: "15/10/21",
        user_id: 97
      },
      {
        id: 913,
        amount: 363.27,
        date: "01/10/21",
        user_id: 5
      },
      {
        id: 914,
        amount: 215.95,
        date: "01/02/21",
        user_id: 62
      },
      {
        id: 915,
        amount: 410.15,
        date: "15/01/21",
        user_id: 25
      },
      {
        id: 916,
        amount: 109.38,
        date: "01/03/21",
        user_id: 61
      },
      {
        id: 917,
        amount: 402.97,
        date: "01/03/21",
        user_id: 4
      },
      {
        id: 918,
        amount: 449.88,
        date: "01/03/21",
        user_id: 4
      },
      {
        id: 919,
        amount: 85.91,
        date: "01/04/21",
        user_id: 59
      },
      {
        id: 920,
        amount: 216.39,
        date: "15/08/21",
        user_id: 6
      },
      {
        id: 921,
        amount: 226.29,
        date: "15/07/21",
        user_id: 66
      },
      {
        id: 922,
        amount: 199.96,
        date: "01/05/21",
        user_id: 98
      },
      {
        id: 923,
        amount: 370.26,
        date: "01/07/21",
        user_id: 61
      },
      {
        id: 924,
        amount: 230.99,
        date: "15/02/21",
        user_id: 74
      },
      {
        id: 925,
        amount: 188,
        date: "15/01/21",
        user_id: 24
      },
      {
        id: 926,
        amount: 446.47,
        date: "15/03/21",
        user_id: 16
      },
      {
        id: 927,
        amount: 451.45,
        date: "15/03/21",
        user_id: 61
      },
      {
        id: 928,
        amount: 239.7,
        date: "01/08/21",
        user_id: 89
      },
      {
        id: 929,
        amount: 137.27,
        date: "01/04/21",
        user_id: 35
      },
      {
        id: 930,
        amount: 106.51,
        date: "15/10/21",
        user_id: 27
      },
      {
        id: 931,
        amount: 267.56,
        date: "15/06/21",
        user_id: 43
      },
      {
        id: 932,
        amount: 478.46,
        date: "15/04/21",
        user_id: 49
      },
      {
        id: 933,
        amount: 85.16,
        date: "15/10/21",
        user_id: 3
      },
      {
        id: 934,
        amount: 353.24,
        date: "15/03/21",
        user_id: 88
      },
      {
        id: 935,
        amount: 432.64,
        date: "15/07/21",
        user_id: 34
      },
      {
        id: 936,
        amount: 432.51,
        date: "01/10/21",
        user_id: 98
      },
      {
        id: 937,
        amount: 335.29,
        date: "01/04/21",
        user_id: 94
      },
      {
        id: 938,
        amount: 308.78,
        date: "01/05/21",
        user_id: 19
      },
      {
        id: 939,
        amount: 233.08,
        date: "15/10/21",
        user_id: 98
      },
      {
        id: 940,
        amount: 469.07,
        date: "15/09/21",
        user_id: 38
      },
      {
        id: 941,
        amount: 457.67,
        date: "15/01/21",
        user_id: 13
      },
      {
        id: 942,
        amount: 223.87,
        date: "15/01/21",
        user_id: 96
      },
      {
        id: 943,
        amount: 425.91,
        date: "15/09/21",
        user_id: 101
      },
      {
        id: 944,
        amount: 349.73,
        date: "15/09/21",
        user_id: 23
      },
      {
        id: 945,
        amount: 59.26,
        date: "01/06/21",
        user_id: 29
      },
      {
        id: 946,
        amount: 488.25,
        date: "15/01/21",
        user_id: 24
      },
      {
        id: 947,
        amount: 152.89,
        date: "01/08/21",
        user_id: 28
      },
      {
        id: 948,
        amount: 245.75,
        date: "01/04/21",
        user_id: 25
      },
      {
        id: 949,
        amount: 345.79,
        date: "01/07/21",
        user_id: 22
      },
      {
        id: 950,
        amount: 79.83,
        date: "01/10/21",
        user_id: 99
      },
      {
        id: 951,
        amount: 244.69,
        date: "15/02/21",
        user_id: 66
      },
      {
        id: 952,
        amount: 86.93,
        date: "15/10/21",
        user_id: 75
      },
      {
        id: 953,
        amount: 96.43,
        date: "15/05/21",
        user_id: 3
      },
      {
        id: 954,
        amount: 387.48,
        date: "01/09/21",
        user_id: 94
      },
      {
        id: 955,
        amount: 410.74,
        date: "01/06/21",
        user_id: 23
      },
      {
        id: 956,
        amount: 256.4,
        date: "15/03/21",
        user_id: 99
      },
      {
        id: 957,
        amount: 299.02,
        date: "15/05/21",
        user_id: 84
      },
      {
        id: 958,
        amount: 264.6,
        date: "01/06/21",
        user_id: 27
      },
      {
        id: 959,
        amount: 477.49,
        date: "01/04/21",
        user_id: 71
      },
      {
        id: 960,
        amount: 338.7,
        date: "01/09/21",
        user_id: 67
      },
      {
        id: 961,
        amount: 264.23,
        date: "15/07/21",
        user_id: 15
      },
      {
        id: 962,
        amount: 398.51,
        date: "01/04/21",
        user_id: 7
      },
      {
        id: 963,
        amount: 277.84,
        date: "15/01/21",
        user_id: 84
      },
      {
        id: 964,
        amount: 98.62,
        date: "15/09/21",
        user_id: 61
      },
      {
        id: 965,
        amount: 250.25,
        date: "01/09/21",
        user_id: 45
      },
      {
        id: 966,
        amount: 472.55,
        date: "01/09/21",
        user_id: 71
      },
      {
        id: 967,
        amount: 379.56,
        date: "15/02/21",
        user_id: 96
      },
      {
        id: 968,
        amount: 491.63,
        date: "15/09/21",
        user_id: 93
      },
      {
        id: 969,
        amount: 81.72,
        date: "01/08/21",
        user_id: 22
      },
      {
        id: 970,
        amount: 94.05,
        date: "15/06/21",
        user_id: 19
      },
      {
        id: 971,
        amount: 346.13,
        date: "01/09/21",
        user_id: 62
      },
      {
        id: 972,
        amount: 199.37,
        date: "01/08/21",
        user_id: 27
      },
      {
        id: 973,
        amount: 412.35,
        date: "15/06/21",
        user_id: 42
      },
      {
        id: 974,
        amount: 251.31,
        date: "15/10/21",
        user_id: 96
      },
      {
        id: 975,
        amount: 188.68,
        date: "15/06/21",
        user_id: 93
      },
      {
        id: 976,
        amount: 360.87,
        date: "15/02/21",
        user_id: 46
      },
      {
        id: 977,
        amount: 398.08,
        date: "15/06/21",
        user_id: 39
      },
      {
        id: 978,
        amount: 308.74,
        date: "15/08/21",
        user_id: 83
      },
      {
        id: 979,
        amount: 318.53,
        date: "01/02/21",
        user_id: 54
      },
      {
        id: 980,
        amount: 455.57,
        date: "01/04/21",
        user_id: 21
      },
      {
        id: 981,
        amount: 243.96,
        date: "15/03/21",
        user_id: 94
      },
      {
        id: 982,
        amount: 129.75,
        date: "15/10/21",
        user_id: 28
      },
      {
        id: 983,
        amount: 315.87,
        date: "15/05/21",
        user_id: 41
      },
      {
        id: 984,
        amount: 334.33,
        date: "01/07/21",
        user_id: 85
      },
      {
        id: 985,
        amount: 363.72,
        date: "01/08/21",
        user_id: 55
      },
      {
        id: 986,
        amount: 367.47,
        date: "15/06/21",
        user_id: 95
      },
      {
        id: 987,
        amount: 426.63,
        date: "01/05/21",
        user_id: 53
      },
      {
        id: 988,
        amount: 274.57,
        date: "01/01/21",
        user_id: 92
      },
      {
        id: 989,
        amount: 218.05,
        date: "15/10/21",
        user_id: 39
      },
      {
        id: 990,
        amount: 74.2,
        date: "15/01/21",
        user_id: 75
      },
      {
        id: 991,
        amount: 362.88,
        date: "15/01/21",
        user_id: 51
      },
      {
        id: 992,
        amount: 85.55,
        date: "01/02/21",
        user_id: 98
      },
      {
        id: 993,
        amount: 400.43,
        date: "15/05/21",
        user_id: 44
      },
      {
        id: 994,
        amount: 72.03,
        date: "15/05/21",
        user_id: 68
      },
      {
        id: 995,
        amount: 202.35,
        date: "15/09/21",
        user_id: 16
      },
      {
        id: 996,
        amount: 213.24,
        date: "01/02/21",
        user_id: 92
      },
      {
        id: 997,
        amount: 187.63,
        date: "15/10/21",
        user_id: 36
      },
      {
        id: 998,
        amount: 473.71,
        date: "15/09/21",
        user_id: 31
      },
      {
        id: 999,
        amount: 437.85,
        date: "01/08/21",
        user_id: 35
      },
      {
        id: 1000,
        amount: 118.61,
        date: "01/01/21",
        user_id: 8
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    throw new Error('Payment seeder can not be rolled back.')
  }
};
