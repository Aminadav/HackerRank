# https://www.hackerrank.com/challenges/tree-inorder-traversal

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""


def inOrder(root):
    # Write your code here
    lst = getAllValues(root)
    # lst.sort()
    print(*lst)


def getAllValues(node):
    if node == None:
        return []
    s = [node.info]
    l = getAllValues(node.left)
    r = getAllValues(node.right)
    # print(s+l+r)
    return l+s+r
