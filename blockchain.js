๐ Types of TS(๊ธฐ๋ณธ)
โ ๋ฐฐ์ด: ์๋ฃํ[]
โ ์ซ์: number
โ ๋ฌธ์์ด: string
โ ๋ผ๋ฆฌ: boolean
โ optional
const player : {
    name: string,
    age?:number
} = {
    name: "nico"
}

โ player.age๊ฐ undefined์ผ ๊ฐ๋ฅ์ฑ ์๋ฆผ
if(player.age < 10) {
}

โญ player.age๊ฐ undefined์ผ ๊ฐ๋ฅ์ฑ ์ฒดํฌ
if(player.age && player.age < 10) {
}

โ ?๋ฅผ :์์ ๋ถ์ด๋ฉด optional

โ Alias(๋ณ์นญ) ํ์
type Player = {
    name: string,
    age?:number
}

const player : Player = {
    name: "nico"
}

โญ ํจ์์์๋ ์ด๋ป๊ฒ ์ธ๊น
type Player = {
    name: string,
    age?:number
}

function playerMaker1(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker1("nico")
nico.age = 12

๐ Types of TS(part II)
โ readonly ์ฌ์ฉํ๊ธฐ
type Player = {
    readonly name:string
    age?:number
}

const playerMaker = (name: string): Player => ({name})

const nico = playerMaker("nico")
๐ซ nico.name = "aa"

const numbers: readonly number[] = [1, 2, 3, 4]
๐ซ numbers.push(1)
โ readonly๊ฐ ์์ผ๋ฉด ์ต์ด ์ ์ธ ํ ์์  ๋ถ๊ฐ
    โ immutability(๋ถ๋ณ์ฑ) ๋ถ์ฌ
        but, javascript์์๋ ๊ทธ๋ฅ ๋ฐฐ์ด

โ Tuple
์ ํด์ง ๊ฐ์์ ์์์ ๋ฐ๋ผ ๋ฐฐ์ด ์ ์ธ
const player: [string, number, boolean] = ["nico", 1, true]
โ readonly๋ ์ฌ์ฉ๊ฐ๋ฅ โ readonly [...] ํํ

โ undefined, null, any
any: ์๋ฌด ํ์
undefined: ์ ์ธX ํ ๋นX
null: ์ ์ธO ํ ๋นX

void
void๋ ๊ฐ์ ๋ฐํํ์ง ์๋ ํจ์์ ๋ฐํ ๊ฐ์ ๋ํ๋๋๋ค. ํจ์์ return ๋ฌธ์ด ์๊ฑฐ๋ ํด๋น return ๋ฌธ์์ ๋ช์์  ๊ฐ์ ๋ฐํํ์ง ์์ ๋ ํญ์ ์ ์ถ๋๋ ํ์์๋๋ค.
```
// The inferred return type is void
function noop() {
return;
}
```
unknown
unknownํ์์ ๋ชจ๋  ๊ฐ์ ๋ํ๋๋๋ค. ์ด๊ฒ์ anyํ์๊ณผ ๋น์ทํ์ง๋ง any๋ณด๋ค unknown์ด ๋ ์์ ํฉ๋๋ค. ์ด์ ๋ unknown๊ฐ์ผ๋ก ์์์ ์ํํ๋ ๊ฒ์ ํฉ๋ฒ์ ์ด์ง ์๊ธฐ ๋๋ฌธ์๋๋ค.
```
function hello(a: any) {
a.b(); // OK
}

function hello2(a: unknown) {
a.b(); // ์๋ฌ: Object is of type 'unknown'.
}
```
never
์ผ๋ถ ํจ์๋ ๊ฐ์ ๋ฐํํ์ง ์์ต๋๋ค.
์ด๋ ํจ์๊ฐ ์์ธ๋ฅผ throwํ๊ฑฐ๋ ํ๋ก๊ทธ๋จ ์คํ์ ์ข๋ฃํจ์ ์๋ฏธํฉ๋๋ค.
```
function fail(msg: string): never {
throw new Error(msg);
}
```
https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown

