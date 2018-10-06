# https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree

# Enter your code here. Read input from STDIN. Print output to STDOUT
'''
class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''


def height(root):
    if root == None:
        return -1
    a = 1 + height(root.left)
    b = 1 + height(root.right)

    return max(a, b)
