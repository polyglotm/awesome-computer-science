def calculate__hanoi_moves(n, prev=1):
    if n == 0:
        return prev - 1

    return calculate__hanoi_moves(n - 1, prev * 2)


class TestUnitHanoi():
    def test_normal_case(self):
        assert calculate__hanoi_moves(1) == 1
        assert calculate__hanoi_moves(2) == 3
        assert calculate__hanoi_moves(3) == 7
        assert calculate__hanoi_moves(4) == 15
