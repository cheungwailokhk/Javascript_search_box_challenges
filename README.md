#### Newsfeed-Automation
docker-compose, python, flask, mssql

This is a demo to use docker-compose to build up a newsfeed automation website. It is implemented by using Python Flask(web server) and MSSQL(database).

#### Folder structure 

Newsfeed<br/>
├──README.md<br/>
└──src<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──Dockerfile<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──docker-compose.yml<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──interface_src<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──example_of_result<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──...<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──interface_src<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──requirements.txt<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──run.py<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──app<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──views.py<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──static<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──templates<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──static<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...<br/>

#### Steps to start docker-compose and try the web template

1. Go to directoary of src
2. Start Docker daemon
3. Builds images if needed, type this in the terminal:
```docker-compose up --build```
Or if you want to build and run containers in the background)
```docker-compose up -d```
4. To check the existence of docker image (Repository names: src_search_demo), type this in the terminal:
```docker images```
5. To check the docker container is running (Container names:src_search_demo_1), type this in the terminal:
```docker ps```
6. Finally, access the web interface by default ip and port
```0.0.0.0:5000``` or ```http://localhost/```
    

#### Notes about docker 
* In case an image but not running, type this in the terminal:
    * Show all stopped containers:
        ```docker ps -a```
    * Run the stopped containers:
    ```docker start -ai <container_name>```
         
* To interact with a running container in the terminal, type this in the terminal:
    ```docker exec -it <container_name>  "bash"```
    
* To remove all stop and running containers,, type this in the terminal:
    ```docker stop $(docker ps -a -q)```
    ```docker rm $(docker ps -a -q)```
    
    
####  Challenges
* On the top we have a text input field which takes the query param.
* Below that we display a list or grid of products with their image and name
* When I type in the search field, the following should happen
* After there is a change in the field, wait for 200ms
* If there is another change in that timeframe, reset the time counter and start it again
* If there are no more changes in the timeframe, fire off an Ajax call to load the data (with the text from the field as query param)
* If the input changes again during the runtime of the Ajax call, cancel it. Go to step 1 (i.e. Wait for 200ms etc)

    
