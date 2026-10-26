class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res: string = '';

        strs.forEach((s: string) => {
            res = res + s.length + "#" + s;
        });

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];
        let i: number = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            const length: number = parseInt(str.slice(i,j));
            res.push(str.slice(j+1, j+1+length))
            i = j + 1 + length
        }

        return res;
    }
}
