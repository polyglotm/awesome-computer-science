def calculate__hanoi_moves(n, total=1):
    if n == 1:
        return total

    return calculate__hanoi_moves(n - 1, total) + calculate__hanoi_moves(n - 1, total) + 1


class TestUnitHanoi():
    def test_normal_case(self):
        assert calculate__hanoi_moves(1) == 1
        assert calculate__hanoi_moves(2) == 3
        assert calculate__hanoi_moves(3) == 7
        assert calculate__hanoi_moves(4) == 15
