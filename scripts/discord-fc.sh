#/bin/sh
# github.com/dylanaraps

# edited by 9ns, (sorry idk another way to call packages :( i am shit at this.

checkexec() {
			command -v "$1" > /dev/null
}

model() {
    if [ -f /sys/devices/virtual/dmi/id/product_family ] ; then
        read -r m </sys/devices/virtual/dmi/id/product_family
    fi
    printf '%s\n' "$m" | tr '[A-Z]' '[a-z]' | tr ',' '.'
}
cpu() {
		cat /proc/cpuinfo | grep "model name" | sed -n '1{p;q}' | cut -c 14-
	}
pkgs() {
if checkexec brew; then echo "$(brew list | wc -l | tr -d ' ') "
elif checkexec apt; then echo "$(dpkg -l | wc -l) "
elif checkexec yay; then echo "$(pacman -Q | wc -l) "
elif checkexec xbps-install; then echo "$(xbps-query -l | wc -l) "
elif checkexec dnf; then echo "$(sudo dnf list installed | wc -l) "
elif checkexec zypper; then echo "$(zypper packages --installed-only | wc -l) "
elif checkexec apk; then echo "$(apk list | wc -l) " ; fi
}
(read -r _ _ k _ </proc/version;IFS=. read -r s _ </proc/uptime;d=$((s/60/60/24));h=$((s/60/60%24));m=$((s/60%60));[ "$d" = 0 ]||u="$u ${d}d";[ "$h" = 0 ]||u=$u\ ${h}h;[ "$m" = 0 ]||u=$u\ ${m}m;. /etc/os-release;while IFS=: read -r a b;do b=${b%kB};case $a in MemT*)_=$((z+=b));_=$((y=b));; Shmem)_=$((z+=b));;MemF*|Buf*|Cac*|SR*)_=$((z-=b));esac;done </proc/meminfo;_=$((z/=1024));_=$((y/=1024));set -- /var/db/k*/ins*/*/;printf '%b\n' "

user: ${USER:-$(id -un)}@$(hostname)
-------------------------------------
model: $(model)
os: ${PRETTY_NAME:-?}
cpu: $(cpu)
shell: ${SHELL##*/}
packages: $(pkgs)
memory: ${z:-?}mb / ${y:-?}mb
kernal: ${k}
") 2>/dev/null
