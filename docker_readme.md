Here's a breakdown of each of the Dockerfile commands

FROM - specifies the base image for the Docker image you are creating. All subsequent instructions in 
the Dockerfile will be applied on top of this base image.

WORKDIR - sets the working directory for any subsequent instructions that follow it in the Dockerfile. 
This is where commands like RUN and COPY will be executed.

COPY - copies files or directories from the host machine to the Docker image. The first argument is the 
path to the file or directory on the host machine, and the second argument is the destination path in 
the Docker image.

RUN - executes a command in the Docker image. This can be used to install packages, run build commands, 
and do other tasks required to configure the image.

EXPOSE - documents the ports that the Docker image is expected to listen on when it is run. It does not 
actually publish the ports.

CMD - specifies the command to run when the Docker container is started from the image. If the Docker 
container is started with a command-line argument, it will override the CMD instruction. There can only 
be one CMD instruction in a Dockerfile, and it should be the last instruction.