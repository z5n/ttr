#/bin/sh
# when will discord.bash be a thing?

if [ $# -eq 0 ]
then echo "prestige, coldcaller, telemarketer, namedropper, moverandshaker, themingler, mrhollywood"
fi

case "$1" in
prestige)
curl -Ls https://sad.st/api/mertis.json | jq '.cogs.prestige' | tr -d '",{}' ;;
coldcaller)
curl -Ls https://sad.st/api/mertis.json | jq '.cogs.coldcaller' | tr -d '",{}' ;;
telemarketer)
curl -Ls https://sad.st/api/mertis.json | jq '.cogs.telemarketer' | tr -d '",{}' ;;
namedropper)
curl -Ls https://sad.st/api/mertis.json | jq '.cogs.namedropper' | tr -d '",{}' ;;
moverandshaker)
curl -Ls https://sad.st/api/mertis.json | jq '.cogs.moverandshaker' | tr -d '",{}' ;;
themingler)
curl -Ls https://sad.st/api/mertis.json | jq '.cogs.themingler' | tr -d '",{}' ;;
mrhollywood)
curl -Ls https://sad.st/api/mertis.json | jq '.cogs.mrhollywood' | tr -d '",{}' ;;
esac