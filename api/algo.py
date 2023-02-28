import time
import sys
num = 100
# f = open("demofile2.txt", "w")
# f.write("numero: " + str(12432423))
# f.close()
while num != 0:
    f = open("demofile2.txt", "a")
    f.writelines("numero: " + str(12432423) + "\n")
    f.close()
    num = num-1
    print(num)
    # permite enviar de vuelta a node
    sys.stdout.flush()
    time.sleep(1)