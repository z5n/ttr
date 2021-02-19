#/bin/sh
case "$1" in 
ttr)
for f in commands/ttr/*.js; do
    printf '%s\n' "${f%.js},"
done
;;
esac
