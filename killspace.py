import ujson as json
import sys

def switcheroo(graph):
    newG = {"nodes": [] }
    for i in graph['nodes']:
        newOne = {}
        kill = i['name'].replace('\n', '')
        newOne["name"] = ' '.join(kill.split())
        kill2 = [j.replace('\n', '') for j in i['edges']]
        newOne['edges'] = [ ' '.join(j.split()) for j in kill2]
        newG["nodes"].append(newOne)
    return newG



if __name__ == '__main__':
    old_file = sys.argv[1]
    new_file = sys.argv[2]
    print new_file
    first = json.load(open(old_file, 'r'))
    first_1 = switcheroo(first)
    json.dump(first_1, open(new_file, 'w'))