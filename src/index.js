module.exports = function toReadable(number) {
    let num = String(number).split("");
    let dozens;
    let words = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    if (number >= 20) {
        dozens = {
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
        };
    }

    if (num.length === 1) {
        return words[number];
    }

    if (num.length === 2) {
        if (number == 10) {
            return words[10];
        } else if (number % 10 == 0) {
            return dozens[number];
        } else if (num[0] == 1) {
            return words[1 + `${num[1]}`];
        } else {
            return dozens[num[0] * 10] + " " + words[num[1]];
        }
    }

    if (num.length === 3) {
        if (number % 100 == 0) {
            return words[num[0]] + " " + "hundred";
        } else if (num[1] == 0) {
            return words[num[0]] + " " + "hundred" + " " + words[num[2]];
        } else if (num[1] == 1 && num[2] == 0) {
            return words[num[0]] + " " + "hundred" + " " + words[10];
        } else if (num[2] == 0) {
            return words[num[0]] + " " + "hundred" + " " + dozens[num[1] * 10];
        } else if (num[1] == 1) {
            return (
                words[num[0]] + " " + "hundred" + " " + words[1 + `${num[2]}`]
            );
        } else {
            return (
                words[num[0]] +
                " " +
                "hundred" +
                " " +
                dozens[num[1] * 10] +
                " " +
                words[num[2]]
            );
        }
    }
};
