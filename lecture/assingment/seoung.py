class Node:
    def __init__(self, key):
        self.key = key
        self.data = None
        self.children = dict()

    def __str__(self):
        return str(self.key)


class Trie:

    def __init__(self):
        self.head = Node(True)

    def insert(self, word: str) -> None:
        node = self.head

        for w in word:
            if w in node.children.keys():
                node = node.children.get(w)
            else:
                node.children[w] = Node(w)
                node = node.children.get(w)
        node.data = word

    def search(self, word: str) -> bool:
        node = self.head

        for w in word:
            if w in node.children.keys():
                node = node.children.get(w)
            else:
                return False
        return node.data = word
        'a,b,c,d,e,f,g................................'
        return search(self, )

    def startsWith(self, prefix: str) -> bool:
        node = self.head
        for p in prefix:
            if p in node.children.keys():
                node = node.children.get(p)
            else:
                return False
        if node.data or 0 < len(node.children.keys()):
            return True
        else:
            return False
