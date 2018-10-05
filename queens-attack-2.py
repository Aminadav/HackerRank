https://www.hackerrank.com/challenges/queens-attack-2/problem

def queensAttack(n, k, Qy, Qx, obstacles):
        eat = [0] * 8
        eat[0] = Qx - 1
        eat[2] = n - Qy
        eat[4] = n-Qx
        eat[6] = Qy - 1

        eat[1] = min(eat[2], eat[0])
        eat[3] = min(eat[4], eat[2])
        eat[5] = min(eat[4], eat[6])
        eat[7] = min(eat[0], eat[6])

        print("eat before:", eat, sum(eat))
        for B in obstacles:
                By = B[0]
                Bx = B[1]
                print("checking obstacles:", B)
                print('By=',By,' Bx=',Bx, 'Qy=',Qy,' Qx=',Qx)
                
                if By == Qy and Bx < Qx: # check eat 0
                        eat[0] = min(eat[0], Qx-1-Bx)
                # check eat 1
                elif Bx == Qx and By>Qy: # check eat 2
                        eat[2]=min(eat[2],By-Qy-1)
                elif By==Qy and Bx > Qx:                 # check eat 4
                        eat[4]=min(eat[4],Bx-Qx-1)
                elif Bx == Qx and By<Qy: # check eat 6
                        eat[6]=min(eat[6],Qy-By-1)

                # corenrs
                elif By == Bx + (Qy-Qx ) and Bx<Qx: # check eat 7
                    print('eat 7')
                    eat[7]=min(eat[7],Qx-Bx-1)
                elif By == Bx + (Qy-Qx ) and Bx>Qx: # check eat 3
                    print('eat 3')
                    eat[3]=min(eat[3],Bx-Qx-1)

                elif By == -Bx + Qy+Qx and By>Qy: # check eat 1
                    print('eat 1')
                    eat[1]=min(eat[1],Qx-Bx-1)

                elif By == -Bx + Qy+Qx and By<Qy: # check eat 5
                    print('eat 5')
                    eat[5]=min(eat[5],Bx-Qx-1)

        print("eat after:", eat, sum(eat))
        totalEat = sum(eat)
        return totalEat
