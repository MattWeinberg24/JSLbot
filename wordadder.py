import os

path = "newwords.txt" # path of the textfile
categories = ["japanese","english","category","lesson"] # required json properties
optional_categories = ["politeness","question"] # optional json properties

with open(path, 'w') as f:
    nextword = True
    while nextword:
        f.write("{")
        for c in categories:
            p = input(c + ": ")
            f.write("\n\t" + c + ": " + p)
        for c in optional_categories:
            p = input(c + ": ")
            if (p != ""):
                f.write("\n\t" + c + ": " + p)
        f.write("\n},\n")
        nextword = input() == ""
    
    

os.system(path) # opens the textfile