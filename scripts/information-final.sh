#/bin/sh
ttr() {
    ~/*/scripts/infomation-page.sh ttr | cut -c 14- | tr '\n' ' '
}


cat <<a

**TTR:**
$(ttr)

developers: <@752547934314168403> | api: [link](https://sad.st/api/) | invite: [link](https://discord.com/oauth2/authorize?client_id=811548981317599242&scope=bot&permissions=8)
a
