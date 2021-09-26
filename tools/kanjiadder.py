# Usage: Edit the lesson variable, then type out each kanji after running the program.
#        Press enter without inputting anything to end the program and open the textfile.
#        If the textfile does not open automatically, navigate to it manually.

import os

path = "newkanji.txt" # path of the textfile

lesson = "13B" # Usage: Overwrite this variable

with open(path, 'w', encoding='utf8') as f:
    nextchar = True
    while nextchar:
        kanji = input().strip()
        if kanji:
            f.write("[\"" + kanji + "\",\"" + lesson + "\"],\n\t")
        else:
            nextchar = False

os.system(path) # opens the textfile 