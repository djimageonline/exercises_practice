#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

# num = [1, 2, 3]
# new_array = num.map do |x|
#   x * 3
# end

# p new_array




#-------------------------------------------------------------------------------------------

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

# array = ["hello", "cool"]
# new_array = array.map do |word|
#   word.upcase
# end
# puts new_array


#-------------------------------------------------------------------------------------------

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].


# people = [
#   {name: "Alice", age: 43},
#   {name: "Peter", age: 19},
#   {name: "Adam", age: 23}
# ]

# people_firstN = people.map do |person|
#   person[:name]
# end

# p people_firstN

#-------------------------------------------------------------------------------------------

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

# numbers = [1, 2, 3]
# new_nums = numbers.map do |num|
#   num + 7
# end

# p new_nums



#-------------------------------------------------------------------------------------------

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].


# strings = ["hello", "goodbye"] 
# string_length = strings.map do |string|
#   string.length
# end
# p string_length



#-------------------------------------------------------------------------------------------

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

# people = [
#   {name: "Alice", age: 27},
#   {name: "Blane", age: 16}
# ]

# ages = people.map do |person|
#   person[:age]
# end

# p ages

#-------------------------------------------------------------------------------------------

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

# nums = [1, 2, 3]
# new_nums = nums.map do |num|
#   num / 2.0
# end
# p new_nums


#-------------------------------------------------------------------------------------------

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

# strings = ["hello", "goodbye"]
# new_strings = strings.map do |string|
#   string[0]
# end
# p new_strings

#-------------------------------------------------------------------------------------------

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

# people = [
#   {name: "Alice", age: 27}, 
#   {name: "Blane", age: 16}
# ]

# other_peeps = people.map do |person|
#   person[:age] * 2
# end
# p other_peeps


#-------------------------------------------------------------------------------------------

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].


# nums = [1, 2, 3]
# new_strings = nums.map do |num|
#   num.to_s
# end
# p new_strings









# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
# SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98