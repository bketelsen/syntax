---
title: List The Azure Virtual Machines Available
date: '2020-08-25'
summary: 'Get a list of the different VM base images available on Azure'
tags: ['azure', 'cloud']
layout: PostSimple
---

I needed this today. To get a list of the different Virtual Machine base images -- Azure calls them SKUs -- use this command:

```bash
az vm image list --all --output table
```

[Reference Information](https://cda.ms/1yM)
