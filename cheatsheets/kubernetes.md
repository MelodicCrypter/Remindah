---
path: "/kubernetes"
title: "Kubernetes"
---

# Kubernetes

## kubectl

| Commands | Descriptions |
| --- | --- |
| `kubectl config get-contexts` | List all the contextsin your kubeconfig file. |
| `kubectl config current-context` | Display current context. |
| `kubectl config use-context <context name>` | Sets the current-context to the specified context. |
| `kubectl apply -f <config file/directory>` | This will apply configuration to a resource. This will create the resource if the resource does not exist yet. |
| `kubectl rollout status deployment <name>` | Watches the rollout status of a deployment. <br>Eg., `kubectl rollout status deployment my-app-depl` |
| `kubectl rollout restart deployment <name>` | Restarts a resource. This will also pull the latest container images. <br>Eg., `kubectl rollout restart deployment my-app-depl` |
| `kubectl get all` | List all resources |
| `kubectl get <resources>` | List a specific resource. <br />Eg., `kubectl get pods` |
| `kubectl get pods --watch` | Watches pod status updates. |
| `kubectl explain <resource>` | List the fields of a resource. <br />Eg., <br /> `kubectl explain deployment` |
| `kubectl describe <resource>` | Prints a detailed description of the selected resource. <br />Eg., <br /> `kubectl describe deployment` <br /> `kubectl describe pods -l name=myLabel` |
| `kubectl api-resources` | Show supported API resources (kinds). |
| `kubectl api-versions` | Show supported API versions. |
| `kubectl exec -it <pod name> -- <command>` | Access the pod container. <br>Eg., `kubectl exec -it my-app-depl-65c67ff97c-jtxhs -- bash` |

### Imperative commands

_Declarative approach is recommended, but there are some exemptions, such as when you're creating secrets._

| Commands | Descriptions |
| --- | --- |
| `kubectl create secret generic <secret_name> --from-literal <KEY>=<VALUE>` | Create a secret based on specified literal value. |
| `kubectl create deployment <name> --image <image>` | Create a deployment. <br />Eg., `kubectl create deployment my-nginx --image nginx` |
| `kubectl create deployment <name> --image <image> --dry-run -o yaml` | Print out the object ina yaml format. This will not actually send the object. <br />Eg., `kubectl create deployment my-nginx --image nginx --dry-run -o yaml` |
| `kubectl expose deployment <name> --port <port>` | Creates a ClusterIP service for a deployment. <br />Eg., `kubectl expose deployment my-nginx --port 8080` |
| `kubectl expose deployment <name> --port <port> --type NodePort` | Creates a NodePort service for a deployment. <br />Eg., `kubectl expose deployment my-nginx --port 8888 --type NodePort` |
| `kubectl expose deployment <name> --port <port> --type LoadBalancer` | Creates a LoadBalancer service for a deployment. <br />Eg., `kubectl expose deployment my-nginx --port 8080 --type LoadBalancer` |

| | |
| --- | --- |
| [ingress-nginx](https://github.com/kubernetes/ingress-nginx) | Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer. |
| [cert-manager](https://github.com/jetstack/cert-manager) | Kubernetes add-on to automate the management and issuance of TLS certificates from various issuing sources. |
