import { Queue } from '../../index'

// 击鼓传花游戏
function hotPotato<T>(elementList: T[], num: number) {
  const queue = new Queue<T>()
  const elimitatedList: T[] = [] // 被淘汰的人
  // 将所有参赛人员入队
  elementList.forEach((element) => {
    queue.enqueue(element)
  })

  // 循环队列，设置结束条件
  while (queue.size() > 1) {
    // 根据传入的数字开始游戏
    for (let i = 0; i < num; i++) {
      // 循环队列
      queue.enqueue(queue.dequeue() as T)
    }
    // 循环结束选出失败者
    elimitatedList.push(queue.dequeue() as T)
  }
  // 当队列只有一个人的时候就是赢家
  const winner = queue.dequeue()

  return {
    winner,
    elimitatedList
  }
}

export { hotPotato }
