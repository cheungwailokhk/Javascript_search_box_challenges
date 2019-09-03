#Download Python
FROM python:3.7.4
  
WORKDIR /code

#nstall cron and curl — 
RUN apt-get update && apt-get install -y cron curl && apt-get clean && apt-get install nano

#Create directory and copy code
ADD interface_src /code
RUN pip3 install -r requirements.txt


#Exec form of ENTRYPOINT allows you to set commands and parameters
#ENTRYPOINT ["/bin/bash"]

#You can also set CMD default command which will be executed when running container without specifying a command. 
CMD ["/bin/bash"]

