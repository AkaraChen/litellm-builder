# Deployment with Ansible 🤖

This project includes an Ansible playbook for automated, one-command deployments. This guide will walk you through the process.

## Prerequisites

-   Ansible installed on your local machine.
-   SSH access to your target server.
-   Docker and Docker Compose installed on your target server.

## Steps

1.  **Install Ansible Docker Collection**

    This collection provides the necessary modules for Ansible to interact with Docker. If you don't have it installed, run:
    ```bash
    ansible-galaxy collection install community.docker
    ```

2.  **Create Your Inventory File**

    The inventory file tells Ansible which servers to connect to. We've provided an example to get you started.

    Copy the example and add your server details (IP, user, SSH key):
    ```bash
    cp hosts.example hosts
    ```
    Your `hosts` file should look something like this:
    ```ini
    [litellm_servers]
    your_server_ip ansible_user=your_username ansible_ssh_private_key_file=~/.ssh/your_private_key
    ```

3.  **Run the Playbook**

    Execute the playbook, pointing it to your inventory file.
    ```bash
    ansible-playbook -i hosts deploy.yaml
    ```

## What It Does

The playbook performs the following actions:
-   Creates a directory `/opt/litellm-builder` on the remote server.
-   Copies your local `config.yaml` and `compose.yaml` to the remote directory.
-   Starts the services using `docker-compose up -d`.
-   Ensures the services are running idempotently (re-running the playbook will not cause errors). 