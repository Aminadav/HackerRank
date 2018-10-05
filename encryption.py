# https://www.hackerrank.com/challenges/encryption/problem
def encryption(s):
    s=s.translate(None,string.whitespace)
    sq=math.sqrt(len(s))
    fl=math.floor(sq)
    ce=math.ceil(sq)
    rows=int(fl)
    columns=int(ce)
    r=""
    for Ci in range(0,columns):
        for Ri in range(0,rows+1):
            position=Ri*columns + Ci
            print position
            if position<len(s):
                r=r + s[Ri*columns + Ci]
        r=r+" "
    return r
