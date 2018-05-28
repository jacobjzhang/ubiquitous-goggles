# https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Float[]}
def average_of_levels(root)
    result = []
    queue = Queue.new

    queue << root
    while !queue.empty?
        queue_size = queue.length
        
        total = 0
        queue_size.times do
            curr_node = queue.pop
            queue << curr_node.left if curr_node.left
            queue << curr_node.right if curr_node.right
            
            total += curr_node.val
        end
        result.push((total.to_f/queue_size))
    end
    
    result
end
