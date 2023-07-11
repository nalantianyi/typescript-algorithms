interface ISegmentNode {
    begin: number,
    end: number,
    left: ISegmentNode | null,
    right: ISegmentNode | null,
    sum: number;
}

class SegmentNode {
    public begin: number;
    public end: number;
    public left: ISegmentNode | null;
    public right: ISegmentNode | null;
    public sum = 0;

    constructor(begin: number, end: number) {
        this.begin = begin;
        this.end = end;
        this.left = null;
        this.right = null;
        this.sum = 0;
    }
}

// begin === end 就表示叶子节点

function build(begin: number, end: number, cb: Function) {
    const node = new SegmentNode(begin, end);
    if (begin !== end) {
        const mid = (begin + end) >> 1;
        node.left = build(begin, mid, cb);
        node.right = build(mid + 1, end, cb);
    }
    cb(node);
    return node;
}

// 执行部分
const array = [], unique: any = {};

for (let i = 0; i < 8; i++) {
    const el = Math.floor(20 * Math.random());
    if (unique[el]) {
        --i;
    } else {
        unique[el] = 1;
        array.push(el);
    }
}
console.log(JSON.stringify([10, 18, 12, 5, 7, 11, 4, 15]));

class SegmentTree {
    public root: SegmentNode;

    constructor(array: number[]) {
        this.root = build(0, array.length - 1, (node: SegmentNode) => {
            if (node.begin === node.end) {
                node.sum = array[node.end];
            } else {
                node.sum = node.left.sum + node?.right.sum;
            }
        })
    }

    inOrder() {
    }

    printNodeByLevel() {
    }

    toString() {
    }
}

const t = new SegmentTree([10, 18, 12, 5, 7, 11, 4, 15]);
console.log(t + "");
