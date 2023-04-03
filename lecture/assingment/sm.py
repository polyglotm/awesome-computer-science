class Node():
    def __init__(self, letters=''):
        self.data = letters
        self.is_complete = True
        self.children = []

    def compareData(self, word):
        match = ""
        if self.children:
            for node in self.children:
                num = min(len(node.data), len(word))
                for i in range(num):
                    if word[i] == node.data[i]:
                        match += word[i]
                if match == word and match == node.data:
                    return
                elif match == node.data:
                    node.comparaDate(word[num:])
                elif match == word:
                    newNode = Node(match)
                    self.children.append(newNode)
                    newNode.children.append(node)
                else:
                    self.children.append(Node(word))
        else:
            self.children.append(Node(word))

class Trie(object):

    def __init__(self, word):
        self.topNode = Node()

    def insert(self, word):
        """
        :type word: str
        :rtype: None
        """
        self.topNode.compareData(word)


    def search(self, word):
        """
        :type word: str
        :rtype: bool
        """


    def startsWith(self, prefix):
        """
        :type prefix: str
        :rtype: bool
        """
