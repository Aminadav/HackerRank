# https://www.hackerrank.com/challenges/organizing-containers-of-balls/submissions/code/86847139

POSSIBLE= "Possible"
IMPOSSIBLE="Impossible"

def organizingContainers(container):
    print(container)
    
    countByType=[0]* len(container[0])
    countByContainer=[sum(x) for x in container]
    for Ci in container: 
        print ("Ci=", Ci)
        for j in range(len(Ci)):
            print(" j=",j)
            countByType[j]+=Ci[j]

    countByContainer.sort()
    countByType.sort()
    print('Count By Types:',countByType)
    print('Count By Container:',countByContainer)
    return POSSIBLE if countByContainer==countByType else IMPOSSIBLE
