FROM mhart/alpine-node:12.19.1

LABEL "com.github.actions.name"="Action edit YML files"
LABEL "com.github.actions.description"="Edit YML file in Github Actions."
LABEL "com.github.actions.icon"="message-square"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="https://github.com/TaiStudio/action-edit-YML"
LABEL "homepage"="https://github.com/TaiStudio/action-edit-YML"
LABEL "maintainer"="Tai Studio <tai.studio@outlook.fr>"
LABEL "version"="1.0.0"

ADD package.json package-lock.json /
RUN npm ci --production
ADD main.js /
RUN chmod +x /main.js

ENTRYPOINT ["node", "/main.js"]
