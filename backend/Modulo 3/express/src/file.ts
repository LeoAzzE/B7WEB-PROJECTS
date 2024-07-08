import { readFile, unlink, writeFile } from "fs/promises"

const exec = async () => {
                //escrevendo
    // console.log('escrevendo no arquivo...')
    // const list = ['leo', 'lucio','flavio']
    // const listTxt = list.join('\n')
    // await writeFile('./teste.txt', listTxt)
    // console.log('Pronto')

                //lendo
    // const fileContent = await readFile('./teste.txt', {encoding: 'utf8'})
    // const list = fileContent.split("\n")
    // console.log(list)

                //alterando
        // const fileContent = await readFile('./teste.txt', {encoding: 'utf8'})
        // const list = fileContent.split("\n")
        // list.push('Fulano')
        // const listText = list.join("\n")
        // await writeFile('./teste.txt',listText )

                //excluindo
        //await unlink('./teste.txt')

}

exec()