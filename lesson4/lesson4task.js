
const fse = require('fs-extra')


const dir = './lesson4/newDir1'
fse.ensureDirSync(dir)

const file = './lesson4/newDir1/file1.txt' 
fse.createFileSync(file)

const dir2 = './lesson4/newDir2'
fse.ensureDirSync(dir2)
fse.moveSync('./lesson4/newDir1/file1.txt', './lesson4/newDir2/file1.txt')

const dir3 = './lesson4/newDir3'
fse.ensureDirSync(dir3)
fse.copySync('./lesson4/newDir2/file1.txt', './lesson4/newDir3/file1.txt')

fse.removeSync('./lesson4/newDir2/file1.txt')
fse.removeSync('./lesson4/newDir3/file1.txt')
fse.removeSync('./lesson4/newDir1')
fse.removeSync('./lesson4/newDir2')
fse.removeSync('./lesson4/newDir3')