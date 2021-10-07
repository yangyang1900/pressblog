JavaScript数据结构与算法-imooc新课程



#### 0.绪论



- 数据结构：栈 队列 集合 链表 字典 树 图 堆
- 进阶算法： 冒泡算法 选择算法 插入算法 归并算法 快速算法 顺序算法 二分搜索
- 算法设计思想：分而治之、动态规划、贪心、回溯



重点关注：数据结构与算法的特点、应用场景、JS实现、时间/空间复杂度



数据结构：计算机存储，组织数据的方式，锅碗瓢盆。

算法：一系列解决问题的清晰指令，类似菜单。

数据结构为算法服务，算法围绕数据结构操作。



有序：栈 队列 链表

无序：集合 字典

有一定连接关系：树 堆 图



链表：遍历链表、删除链表节点

树、图：深度/广度优先遍历

数组：冒泡/选择/插入/归并/快速排序、顺序/二分搜索



#### 1.时间/空间复杂度



![空间复杂度的](https://img.mukewang.com/szimg/6127049b0952320705000435.jpg)



```javascript
// 事件复杂度定性运行时间，用大 O 标识，比如 O(n)

// O(1)
let i = 0；
i += 1

// O(n)
for(let i = 0; i < n; i++){
  console.log(i)
}
// O(1) + O(n) = O(n) // 相加 只看最大的时间复杂度

// O(n) * O(n) = O(n^2) // 相乘，取次方
for(let i = 0; i < n; i++){
   for(let j = 0; j < n; j++ ){
     console.log(i, j)
   }
}

// O(logN)
let i = 1;
while(i < n){
  console.log(i)
  i *= 2
}
```



时间复杂度主要关注：1、logn、n、n的平方



```javascript
// 每一个基础类型的值为一个空间计算单元

// O(1) // 因为只声明了单个变量
let i = 0;
i += 1

// O(n) // 因为数组中占用了 n 个空间
const list = []
for(let i = 0; i< n; i++){
  list.push(i)
}

// O(n^2) // 因为矩阵存储了多维的值
const matrix = []
for(let i = 0; i < n; i++){
  matrix.push([])
  for(let j = 0; j < n; j++){
    matrix[i].push(j) 
  }
}
```



空间复杂度主要关注：1、n、n的平方



#### 2.栈



##### 1.基础理论



JavaScript可以用数组实现栈的功能。

```javascript
push 入栈
pop 出栈

const stack = []
stack.push(1)
stack.push(2)
let item1 = stack.pop()
let item2 = stack.pop()
```

  

栈的应用场景：所有后进先出的结构。
1、十进制转换为二进制：最后余数要倒叙输出才是正确二进制；

![img](https://img.mukewang.com/szimg/611e07240001a10219201080.jpg)

2、判断括号是否合法：左括号进栈，右括号出栈，栈空则合法；

![img](https://img.mukewang.com/szimg/611e081a0001b7a319201080.jpg)

3、函数调用栈：最后调用的函数，最先执行完；

![img](http://img.mukewang.com/szimg/611e098b0001a2e719201080-500-284.jpg)



##### 2.LeetCode 20 有效的括号



**题目描述：**

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。



**解题思路(通用)**

```
1、阅读题目，通过例子进行理解。
2、解题思路，对输入和输出仔细观察，发现规律，确定思路。
3、解题步骤，使用确定的思路，进行一步一步描述，理清步骤。
4、coding part，开始转为机器语言，选择编程语言按步实现。
  4.1、第一遍按照思路步骤，在leetcode实现。
  4.2、注意判断特殊情况，比如null，溢出等。
  4.3、执行代码验证
  4.5、自己多找一些输入对程序进行验证。
  4.6、提交代码
5、代码优化，做到更简洁，使用新的思路，新的数据结构，看是否可以提高性能和更简洁。
6、对代码复杂度进行分析（时间复杂度，空间复杂度）
```



**本题的思路**

```
01  新建一个栈
02  扫描字符串，遇左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法
03  最后栈空了就合法，否则不合法

//详细思路(leetcode思路)
我们遍历给定的字符串 ss。当我们遇到一个左括号时，我们会期望在后续的遍历中，有一个相同类型的右括号将其闭合。由于后遇到的左括号要先闭合，因此我们可以将这个左括号放入栈顶。

当我们遇到一个右括号时，我们需要将一个相同类型的左括号闭合。此时，我们可以取出栈顶的左括号并判断它们是否是相同类型的括号。如果不是相同的类型，或者栈中并没有左括号，那么字符串 ss 无效，返回 \text{False}False。为了快速判断括号的类型，我们可以使用哈希表存储每一种括号。哈希表的键为右括号，值为相同类型的左括号。

在遍历结束后，如果栈中没有左括号，说明我们将字符串 ss 中的所有左括号闭合，返回 \text{True}True，否则返回 \text{False}False。

注意到有效字符串的长度一定为偶数，因此如果字符串的长度为奇数，我们可以直接返回 \text{False}False，省去后续的遍历判断过程。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/valid-parentheses/solution/you-xiao-de-gua-hao-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```



leetcode官方代码(加了部分注释)；

```javascript
var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([	//为了快速判断括号的类型，我们可以使用哈希表存储每一种括号。哈希表的键为右括号，值为相同类型的左括号。
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s){	
        if (pairs.has(ch)) {	//pairs.has('(')返回false pairs.has(')')返回true，所以如果是左括号push，右括号则判断是否有匹配
          	//右括号时候，如果stk为空 或 如果到了有右括号时候，上一个stk最后一个应该和此时循环到的ch对应的匹配，不匹配就返回false
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {	
                return false;
            }
          	//如果是匹配就pop stk最后一个内容，用接下来的继续比较，循环完传入的字符串s，如果是空返回true
            stk.pop();
        } 
        else {
            stk.push(ch);
        }
    };
    return !stk.length;
};
```



还有一种步骤比较清晰易懂的解法：

```javascript
//时间复杂度O(n)，空间复杂度O(n)
var isValid = function(s) {
  if(s.length % 2 ===1) {
     return false;
  }
  const stack = []
  for(let i=0; i < s.length; i += 1) {
    const c = s[i]
    if(c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const t = stack[stack.length-1];
      if(
      	(t === '(' && c === ')') ||
        (t === '{' && c === '}') ||
        (t === '[' && c === ']')
      ) {
        stack.pop();
      } else {
        return false
      }
    }
  }
  return !stack.length
}
```

第一种解法是利用字典优化了该解法。



##### 3.前端与栈



前端与栈：JS中的函数调用堆栈。



```javascript
const func1 = () => {
    func2();
};
const func2 = () => {
    func3();
};
const func3 = () => {};

func1();
```



##### 4.LeetCode 144 二叉树的前序遍历



**题目描述**



给你二叉树的根节点 `root` ，返回它节点值的 **前序** 遍历。



**解题思路**



前序遍历：对于二叉树中的任意一个节点，先打印该节点，然后是它的左子树，最后右子树（中左右）

中序遍历：对于二叉树中的任意一个节点，先打印它的左子树，然后是该节点，最后右子树（左中右）

后序遍历：对于二叉树中的任意一个节点，先打印它的左子树，然后是右子树，最后该节点（左右中）



![image.png](https://pic.leetcode-cn.com/0005d6f797d3281bbe2be08effd0f8fa991dc8126aef754929af34edf650626a-image.png)

以上述中，前中后序遍历顺序如下：

- 前序遍历（中左右）：5 4 1 2 6 7 8
- 中序遍历（左中右）：1 4 2 5 7 6 8
- 后序遍历（左右中）：1 2 4 7 8 6 5



**递归实现：**

所以，遍历二叉树的过程也就是一个递归的过程，例如前序遍历，先遍历根节点，然后是根的左子树，最后右子树；遍历根节点的左子树的时候，又是先遍历左子树的根节点，然后左子树的左子树，左子树的右子树…….

```javascript
// 前序遍历
var preorderTraversal = (root) => {
    let result = []
    var preOrderTraverseNode = (node) => {
        if(node) {
            // 先根节点
            result.push(node.val)
            // 然后遍历左子树
            preOrderTraverseNode(node.left)
            // 再遍历右子树
            preOrderTraverseNode(node.right)
        }
    }
    preOrderTraverseNode(root)
    return result
};
```





**迭代实现：(利用栈模拟递归，改写递归。)**

利用栈来记录遍历的过程，实际上，递归就使用了调用栈，所以这里我们可以使用栈来模拟递归的过程

首先根入栈
将根节点出栈，将根节点值放入结果数组中
然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈
继续出栈（左子树被出栈）…….
依次循环出栈遍历入栈，直到栈为空，遍历完成

```javascript
// 前序遍历
const preorderTraversal = (root) => {
    const list = [];
    const stack = [];
    
    // 当根节点不为空的时候，将根节点入栈
    if(root) stack.push(root)
    while(stack.length > 0) {
        const curNode = stack.pop()
        // 第一步的时候，先访问的是根节点
        list.push(curNode.val)
        
        // 我们先打印左子树，然后右子树
        // 所以先加入栈的是右子树，然后左子树
        if(curNode.right !== null) {
            stack.push(curNode.right)
        }
        if(curNode.left !== null) {
            stack.push(curNode.left)
        }
    }
    return list
}
```



##### 5.思考题



**1.请用 ES6 的 class，封装一个 Stack 类，包括 push、pop、peek 方法。**



```javascript
class Stack {
 constructor(list = []) {
   this.stack = list;
 }
 pop() {
   return this.stack.splice(this.stack.length - 1, 1)[0];
 }
 push() {
   const args = [].slice.call(arguments);//将 arguments 转换成数组

   this.stack = [...this.stack, ...args];
   return this.stack.length;
 }
 peek() {
   return this.stack[this.stack.length - 1];
 }
 empty() {
   return this.stack.length === 0;
 }
}
```



**2.请用栈这个数据结构，将 100 这个十进制数字转为二进制。**



```javascript
const bin = (num) => {
  const stack = []
  const res = []
  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  const len = stack.length
  // 注意不能写成 for (let i = 0; i < stack.length; i +=1) ，在循环中随着 stack.pop() 的执行，stack.length 的值会不断变化。
  for (let i = 0; i < len; i +=1) {
    res.push(stack.pop())
  }
  // 或可写成：
  // for (let i = stack.length-1; i > -1; i -=1) {
  //   res.push(stack[i])
  // }
 
  return res
}
```



#### 3.队列



##### 1.基础理论



队列：先进先出



```javascript
const queue = [];

queue.push(1);//进入队列

queue.push(1);//进入队列

const item1 = queue.shift();//出队列

const item2 = queue.shift();//出队列
```



js中没有数据队列和栈这个数据结构但是可以用数组这个数据结构来模拟队列和栈.。



队列的应用场景：

- 食堂排队打饭
- JS异步中的任务队列
- 计算最近请求



##### 2.LeetCode 933 最近的请求次数



**题目描述**

写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

- RecentCounter() 初始化计数器，请求数为 0 。
- int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。

保证 每次对 ping 的调用都使用比之前更大的 t 值。



简单来说：

让定义一个计数器，这个计数器只包含一个方法ping，每次ping传个毫秒单位的时间进去，他会确保每次传的时间都是递增的，用来模拟他调用ping的时间点，然后返回最近3000毫秒内调用ping的次数。

看一个示例，例如

```javascript
输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
```



**解题思路**



1.新建队列。

​	需要在 pin 方法中被访问，并且先后多次调用 pin 方法访问的都是同一个队列。因此需要在构造函数中把 pin 挂在 this 上就可以了.。
2.入队 出队
​	2.1. 有新请求就入队，300ms前发出的请求出队
​	2.2. 队列的长度就是最近请求的次数



```javascript
var RecentCounter = function() {
    // 在构造函数中添加一个属性队列
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // 每次都入队新请求
    this.queue.push(t);
    // 循环判断当前对头是否小于 t - 3000
    const time = t-3000;
    while(this.queue[0] < time){
        // 进入循环，则对头元素小于 t - 3000 了
        // 出队
        this.queue.shift();
    }
    // 在 [t-3000,t]返回内的请求次数就是当前队列剩余的元素
    return this.queue.length;
};
```



##### 3.前端与队列



前端与队列：JS异步中的任务队列



时间循环和任务队列：

- 1.js代码执行时有主事件，放到Callback Queue里
- 2.js引擎在任务队列里取主事件执行（每次只能处理一个事件）
- 3.如果里面有异步任务，丢给WebAPI执行，js引擎继续执行后面的代码
- 4.WebAPI在执行异步任务结束时，会把里面的回调函数放到Callback Queue里，若任务队列里前面事件都执行完了，回调函数的代码会放到js引擎里执行



![img](https://img.mukewang.com/szimg/6129b499098ba84f05000303.jpg)



```
setTimeout(() => {console.log(1)}, 1);
setTimeout(() => {console.log(2)}, 0);
setTimeout(() => {console.log(3)});

1
2
3
```



##### 4.思考题



请用 ES6 的 class，封装一个 Queue 类，包括 push、shift、peek 方法。



```javascript
class Queue {
    constructor () {
        this.queue = [];
    }
    
    push (item) {
        this.queue.push(item);
    }
    
    shift () {
        this.queue.shift();
    }
    
    peek (){
        return this.queue[0];
    }
 }
```



#### 4.链表



##### 1.基础理论



链表：多个元素组成的列表，元素存储不连续，用next指针链接在一起。



区别：

数组：增删非首尾元素的时候往往需要移动元素。「如数组塌陷」

链表：增删非首尾元素，不需要移动元素，只需要更改 next 指向即可。而且链表可以在空间上不连续。



js中没有链表这个数据结构。但是可以用object模拟链表。

```javascript
const a = {value: 'a'}
const b = {value: 'b'}
const c = {value: 'c'}
const d = {value: 'd'}
a.next = b
b.next = c
c.next = d
// 插入值
const e = {value: 'e'}
a.next = e
e.next = b
// 删除
a.next = c // 可以一下删除多个值
// 遍历链表
let p = a
while (p){
    console.log(p.value)
    p = p.next
}
```



##### 2.LeeetCode 237 删除链表中的节点



**题目描述**

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 **要被删除的节点** 。



示例 1：

```
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```



**解题思路**



- 最初思路是删除的上一个节点指向删除的下一个节点，但是我们获取不到删除的shanggejiedian
- 所以，我们将被删除节点转移到下个节点，但是删除前将下个节点值转移到当前节点上



先看一个知识点：

```javascript
//JS中基本类型按值引用，对象类型按地址引用
let a = {};
let b = a;
a.val = 1; // 此时 a → { val: 1 }, b → { val, 1 }
a = {}; // 此时 a → {}, b → { val, 1 }
```

1.在JS中，以上代码段中的a其实只是保存了一个内存中的地址，每次使用a的时候其实是通过地址去找到真正的{}
2.而将a赋值给b，其实就是将a保存的地址复制给b一份，然后调用b也会去找到和a相同地址的{}
3.a.val = 1就是将a地址指向的对象{}增加一个值为1的属性val
4.因为b保存的地址也指向同一个对象，所以看起来就像是b也在同步变化。其实b保存的地址并没有变化。
5.a = {}则将一个新的{}的地址赋值给了a，此时覆盖掉了原来保存的{ val: 1 }对象的地址，然而b所保存的地址仍然指向原来的{ val: 1 }

更多解释：https://github.com/mqyqingfeng/Blog/issues/10



有时候这题有人会想以下的解题思路：

```javascript
var deleteNode = function(node) {
  node = node.next;
};
```



放到本题来说就是题目给的参数node（相当于示例中的b）只是题意链表中的对应节点（相当于示例中的a）的地址副本，对node（b）赋值相当于直接覆盖掉这个副本的值，但是原节点（a）保存的地址并不会变。对node.next和node.val赋值才是真正的操作链表对应节点的内容。



所以正确写法是：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;	//将下个节点值转移到当前节点上
  node.next = node.next.next;	//删除下个节点
};
```



##### 3.LeetCode 206 反转链表



**题目描述**



给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。



```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```



**解题思路**



- 反转两个节点：将n+1的next指向n
- 反转多个节点：双指针(prev和curr)遍历链表，重复上述操作



方法一：迭代
假设链表为 1→2→3→∅，我们想要把它改成←1←2←3。

在遍历链表时，将当前节点的next指针改为指向前一个节点。由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。

```javascript
var reverseList = function(head) {
    //初始化前一个节点prev和当前节点curr
  	let prev = null;
    let curr = head;
    while (curr) {
      	//获取到下一个节点，后面要用
        const next = curr.next;
      	//反转，当前节点指向前一个节点
        curr.next = prev;
      	//处理完之后，当前的变成了前一个，下一个变成了当前
        prev = curr;
        curr = next;
    }
  	//最后返回新的头引用
    return prev;
};
```



方法二：递归

视频讲解链接：https://leetcode-cn.com/problems/reverse-linked-list/solution/shi-pin-jiang-jie-die-dai-he-di-gui-hen-hswxy/



##### 4.LeetCode 2两数相加



**题目描述**

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。



```javascript
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```



**解题思路**



- 新建一个空链表。
- 遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加。



由于输入的两个链表都是逆序存储数字的位数的，因此两个链表中同一位置的数字可以直接相加。

我们同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。具体而言，如果当前两个链表处相应位置的数字为 n1,n2n1,n2，进位值为 carry，则它们的和为 n1+n2+carry；其中，答案链表处相应位置的数字为 (n1+n2+carry) mod 10，而新的进位值为:
$$
\lfloor\frac{n1+n2+\textit{carry}}{10}\rfloor
$$
如果两个链表的长度不同，则可以认为长度短的链表的后面有若干个 00 。

此外，如果链表遍历结束后，有carry> 0，还需要在答案链表的后面附加一个节点，节点的值为carry。



```javascript
var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};
```



另一种思路题解：

```javascript
```





##### 5.LeetCode 83删除链表中的重复元素



**题目描述**



存在一个按升序排列的链表，给你这个链表的头节点 `head` ，请你删除所有重复的元素，使每个元素 **只出现一次** 。



**解题思路**



由于给定的链表是排好序的，因此重复的元素在链表中出现的位置是连续的，因此我们只需要对链表进行一次遍历，就可以删除重复的元素。

具体地，我们从指针cur 指向链表的头节点，随后开始对链表进行遍历。如果当前cur与 cur.next对应的元素相同，那么我们就将 cur.next从链表中移除；否则说明链表中已经不存在其它与cur对应的元素相同的节点，因此可以将 cur指向cur.next。

当遍历完整个链表之后，我们返回链表的头节点即可。



注意：当我们遍历到链表的最后一个节点时，cur.next为空节点，如果不加以判断，访问cur.next对应的元素会产生运行错误。因此我们只需要遍历到链表的最后一个节点，而不需要遍历完整个链表。



```javascript
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }

    let cur = head;
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
          	//cur不断与next比较，直到不相等，再切换到cur.next再重复步骤比较
            cur = cur.next;
        }
    }
    return head;
};
```



##### 6.LeetCode 141环形链表



**题目描述**



给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。



**解题思路**

- 每当慢指针slow前进一步，快指针fast就前进两步。
- 如果fast最终遇到空指针，说明链表中没有环；
- 如果fast最终和slow相遇，那肯定是fast超过了slow n圈，说明链表中含有环。
- ● D：从头节点到入环点的距离
- ● S1：从入环点到首次相遇点的距离
- ● S2：从首次相遇点到入环点的距离
- 相遇时，慢指针走的距离：D+S1
- 相遇时快指针已经绕环 n 次，它走的距离：D+n(S1+S2)+S1
- 因为快指针的速度是 2 倍，所以相同时间走的距离也是 2 倍，也就是说D+n(S1+S2)+S1=2(D+S1)
- 上面的公式推导出D=(n-1)(S1+S2)+S2
- 也就是说，从链接头结点到入环点的距离，等于从首次相遇点绕环n-1圈再回到入环点的距离

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 快慢指针初始化指向 head
  let slow = head;
  let fast = head;
  // 快指针走到末尾时停止
  while (fast && fast.next) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
    // 快慢指针相遇，说明含有环
    if (slow == fast) {
      return true;
    }
  }
  // 不包含环
  return false;
};
```



##### 7.前端与链表：JS中的原型链



原型链的本质是链表。
原型链上的节点是各种原型对象，比如：Function.prototype ...
原型链通过 ```__proto__``` 来连接，而不是next

原型链的样子：

![img](https://img.mukewang.com/szimg/613df6d609fadcdd05000211.jpg)

如果A沿着原型链可以找到 B.prototype, 那么A instanceof B 为true。如果在A对象上没有找到 x 属性，那么就会沿着原型链找x 属性。

```javascript
const obj = {};

Object.prototype.x = 'x';

obj.x ---> 'x'
```



**面试题：instance of原理**



解法：遍历A的原型链，如果找到B.prototype，返回true。

```javascript
const instanceOf = (A, B) => {
  let p = A;
  while(p) {
    if(p === B.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
}
```



**思考题**



```javascript
var foo = {}
var F = function(){}
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);
console.log(F.a)
console.log(F.b)

value a
undefined
value a
value b
```



##### 8.前端与链表：使用链表指针获取JSON的节点值



```javascript
const json = {
    a: { b: { c: 1 } },
    d: { e: 2 },
};

const path = ['a', 'b', 'c'];

let p = json;
path.forEach((k) => {
    p=p[k];
});
```



##### 9.LeetCode 234回文链表



**题目描述**



给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。



**解题思路**



方法一：将值复制到数组中后用双指针法

- 复制链表值到数组列表中。
- 使用双指针法判断是否为回文。



第一步，我们需要遍历链表将值复制到数组列表中。我们用 ```currentNode``` 指向当前节点。每次迭代向数组添加 ```currentNode.val```，并更新 ```currentNode = currentNode.next```，当 ```currentNode = null ```时停止循环。



```javascript
var isPalindrome = function(head) {
    const vals = [];
    while (head !== null) {
        vals.push(head.val);
        head = head.next;
    }
    for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
        if (vals[i] !== vals[j]) {
            return false;
        }
    }
    return true;
};
```



还可以通过递归和快慢指针，可以参考：

https://leetcode-cn.com/problems/palindrome-linked-list/solution/hui-wen-lian-biao-by-leetcode-solution/



#### 5.集合



##### 1.基础理论



集合是什么：一种无序且唯一的数据结构。

ES6中有集合这种数据结构，名为Set。

常用操作：去重、判断元素是否在集合在集合中、请交集。



```javascript
// 去重
const arr = [1,1,2,2];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1);

// 求交集
const set2 = new Set([2,3]);
const set3 = new Set([...set].filter(item => set2.has(item)));

// filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。  
// 和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
```



##### 2.LeetCode 349 两个数组的交集



**题目描述**



给定两个数组，编写一个函数来计算它们的交集。



**解题思路**



方法一：两个集合

计算两个数组的交集，直观的方法是遍历数组 nums1，对于其中的每个元素，遍历数组 nums2 判断该元素是否在数组 nums2 中，如果存在，则将该元素添加到返回值。假设数组 nums1 和 nums2 的长度分别是 mm 和 nn，则遍历数组 nums1 需要 O(m) 的时间，判断 nums1 中的每个元素是否在数组 nums2 中需要 O(n) 的时间，因此总时间复杂度是 O(mn)。



如果使用哈希集合存储元素，则可以在 O(1)的时间内判断一个元素是否在集合中，从而降低时间复杂度。



首先使用两个集合分别存储两个数组中的元素，然后遍历较小的集合，判断其中的每个元素是否在另一个集合中，如果元素也在另一个集合中，则将该元素添加到返回值。该方法的时间复杂度可以降低到 O(m+n)。



```javascript
const set_intersection = (set1, set2) => {
    if (set1.size > set2.size) {
        return set_intersection(set2, set1);
    }
    const intersection = new Set();
    for (const num of set1) {
        if (set2.has(num)) {
            intersection.add(num);
        }
    }
    return [...intersection];
}

var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return set_intersection(set1, set2);
};
```



方法二：排序+双指针

如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。

首先对两个数组进行排序，然后使用两个指针遍历两个数组。可以预见的是加入答案的数组的元素一定是递增的，为了保证加入元素的唯一性，我们需要额外记录变量pre表示上一次加入答案数组的元素。

初始时，两个指针分别指向两个数组的头部。每次比较两个指针指向的两个数组中的数字，如果两个数字不相等，则将指向较小数字的指针右移一位，如果两个数字相等，且该数字不等于pre，将该数字添加到答案并更新pre变量，同时将两个指针都右移一位。当至少有一个指针超出数组范围时，遍历结束。

```javascript
var intersection = function(nums1, nums2) {
    nums1.sort((x, y) => x - y);
    nums2.sort((x, y) => x - y);
    const length1 = nums1.length, length2 = nums2.length;
    let index1 = 0, index2 = 0;
    const intersection = [];
    while (index1 < length1 && index2 < length2) {
        const num1 = nums1[index1], num2 = nums2[index2];
        if (num1 === num2) {
            // 保证加入元素的唯一性
            if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1);
            }
            index1++;
            index2++;
        } else if (num1 < num2) {
            index1++;
        } else {
            index2++;
        }
    }
    return intersection;
};
```



##### 3.前端与集合：使用ES6中Set



```javascript
集合set 的迭代 
	1.for of
  2. 配合 keys 和 values 方法 ，在集合中，keys 和 values 是一样的 
  3. entries 方法  

set 转换成 array: 
  1. [...set]
  2. Array.from(set)  

array 转换成 set： 
  1. set = new Set(arr)

// 交集
const intersection = new Set([...mySet].filter(x => mySet2.has(x)));

// 差集 set1有 set2没有
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));
```





#### 6.字典



##### 1.基础理论



什么是字典：

与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储。

ES6有字典Map



使用ES6 Map：

```javascript
const m = new Map();

// 增
m.set('a', 'aa');
m.set('b', 'bb');

// 删
m.delete('b');
m.clear();

// 改
m.set('a', 'aaa')

// 查
m.get('a');
```





#### 7.树



#### 8.图



#### 9.堆



#### 10.搜索排序



#### 11.分而治之



#### 12.动态规划



#### 13.回溯算法



14.



