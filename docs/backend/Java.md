# Java

## 泛型

### 要点

- Salary\<Integer> 不是 Salary\<Number> 的子类
- T 不能是基本类型, 默认为 Object
- Producer Extends Consumer Super(PECS)

### extends

- 使用类似 `<? extends Number>`通配符作为方法参数时表示：

  - 方法内部可以调用获取`Number`引用的方法，例如：`Number n = obj.getFirst();`

  - 方法内部无法调用传入`Number`引用的方法（null除外），例如：`obj.setFirst(Number n);`

    即使用`extends`通配符作为方法参数时表示 `readonly`

- 使用类似` <T extends Number>` 定义泛型类时表示：

  泛型类型限定为Number以及Number的子类



### super

- 使用类似`<? super Integer>`通配符作为方法参数时表示：

  - 方法内部可以调用传入`Integer`引用的方法，例如：`obj.setFirst(Integer n);`

  - 方法内部无法调用获取`Integer`引用的方法（`Object`除外），例如：`Integer n = obj.getFirst();`

    即使用`super`通配符表示 writeonly

- 使用类似 \<T supter Number> 定义泛型类时表示：

  泛型类型限定为Number以及Number的父类



## 集合

List, Set, Map, 支持泛型, 统一使用 Iterator 遍历

### List

有序, 用索引访问, 元素可重复

- ArrayList 数组结构, 查找快
- LinkedList 链表结构, 增删快 

### Map

key-value映射关系, key 唯一

- HashMap, EnumMap 无序
- TreeMap 有序, SortedMap 接口实现

### Set

元素唯一

- HashSet 无序
- TreeSet 有序, SortedSet 接口实现

### Queue

先进先出

- PriorityQueue 优先队列
- Deque 双端队列

### Stack

后进先出

## IO

