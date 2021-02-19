#/bin/sh
ttr() {
    ~/*/scripts/infomation-page.sh ttr | cut -c 14- | tr '\n' ' '
}


cat <<a

**TTR:**
$(ttr)

developer: <@752547934314168403> | api: [link](https://sad.st/api/))
a
