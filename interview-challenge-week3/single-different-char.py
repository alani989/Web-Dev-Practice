str1 = "abcdl"
str2 = "abcdejk"

for letter in str2:
    if (str1.count(letter) != str2.count(letter)):
        difference = letter
        print(letter)