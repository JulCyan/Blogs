# SQL

## 清空表数据

```sql
-- 逐行删除速度极慢，不适合大量数据删除
Delete from tablename where 1 = 1
-- 删除所有数据，保留表结构，不能撤消还原
TRUNCATE TABLE tablename
-- 删除表，数据和表结构一起删除，快速
DROP TABLE IF EXISTS `tablename`
```

## 备份表数据

```sql
--  复制表结构及数据到新表 
CREATE TABLE newtable SELECT * FROM oldtable 
```



