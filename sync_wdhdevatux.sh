#!/bin/bash

echo " "
echo "### "
echo "### Rsyncing /dist to wdh.com/dev/atux..."
echo "###  "
echo " "
echo " "

cd /Users/flash/Dropbox/Websites/at-ui-ux;



## Sync the site
## This should also set read/write perms on folders/files, excludes stuff, etc.

# gcloud compute copy-files dist/* hostwdh:/data/vhosts/arttap.dev/ui.arttap.dev/httpdocs/ --zone us-east1-c
# rsync --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r --progress --delete --exclude ".htaccess" --exclude "*.psd" --exclude "*.git" --exclude "*.zip" --exclude ".DS_Store" -avzh dist/ wdh.com@104.196.126.16:/var/www/vhosts/wdh.com/httpdocs/dev/atux
gcloud compute scp dist/* hostwdh:/data/vhosts/arttap.dev/ui.arttap.dev/httpdocs/ --zone us-east1-c --recurse 

echo " "
echo " "
echo "###  "
echo "### Done syncing files to ui.arttap.dev"
echo "###  "
echo " "
echo " "


# gcloud compute copy-files dist/* hostwdh:/data/vhosts/arttap.dev/ui.arttap.dev/httpdocs/ --zone us-east1-c --dry-run
# gcloud compute scp dist/* hostwdh:/data/vhosts/arttap.dev/ui.arttap.dev/httpdocs/ --zone us-east1-c --dry-run --recurse 
