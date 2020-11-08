# ISA-Sheets or ISA-ATTRACTION

### What is FAIR data and the ISA model?

**FAIR** data are quantifiable observations that have been made **findable**, **accessible**, **interoperable** and **reusable**.
This paradigm can go a long way to ensuring that data is easily sharable between investigators,
and furthers reproducibility by providing rich, standardized metadata for samples.
The **investigation**, **study** and **assay** (ISA) model is one formalization of FAIR practices,
and defines both hierachical data [schemas](https://isatools.readthedocs.io/en/latest/isamodel.html) (XML, JSON) as well as a tab delimited format (Tab)
to facilitate data transfer and readability.

### What problem does our tool solve?
While frameworks like the ISA exists, there is a barrier for data generators to compile their data in these standardized formats. Using our tool, users are able to generate ISA commons compliant spreadsheets where metadata about investigations can be collected and continually validated without requiring detailed familiarity of schema structure up front.

Our tool is a Google sheets application build surrounding the ISA framework which facilitates the collection of metadata according to 
[schema](https://github.com/ISA-tools/Configuration-Files/tree/master/isaconfig-default_v2015-07-02). Additionally, the ISA framework has a large suite of [tools](https://isa-tools.org/) that can be used in conjunction with the ISA-Sheets or ISA-ATTRACTION making it a valuable and versatile tool. 

Our tool aims to: 
1. Facilitate metadata collection using a familiar user interface
2. Allow the portability of (meta)data entry to the data source 
3. Facilitate the upload of structured (meta)data to the cloud for easy sharing

### Overview of the tool 

![workflow diagram](https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/static/ISASheetsWorkflow.png)

## Installation

### From Github

1. **Install the Google Apps Script Github Assistant:** 
Currently, the only browser with an extension to integrate Github into the Google apps environment is Chrome. Link: [Google Apps Script GitHub Assistant](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en)

2. **Fork the ISA-Sheets Repo:**
For the Github Assistant to recognize the ISA-Sheets repository, you must create a fork owned by your github account.

3. **Create a blank Google Apps Script project:**
Navigate to [script.google.come](https://script.google.com/) and select `New Project` from the top left.
Rename the project to whatever makes sense to you, e.g. ISA-Sheets.

4. **Select the ISA-Sheets fork:**
From the `repository` drop down menu, select the repository 
`[yourGithubAccount]/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection`.
After selecting the repository, be sure that the `main` branch is selected.

![repo bar](static/installation_github_repo_bar.png)

5. **Pull the repository:**
Press the ![pull](static/installation_github_pull_icon.png) icon and select `pull` again when the diff screen apears.

6. **Create a new spreadsheet and deploy:**
In a new tab, create a new Google Sheets document and give it a name that makes sense to you.
Navigate back to the tab with your ISA-Sheets script and select `Test as add on...` from the `run` menu.

![run menu](static/installation_github_run_menu.png)

In the popup window, select `Installed and enabled` from the `Installation config` menu,
and click `select doc` to select the spreadsheet you made.

![configure test](static/installation_github_configure_test.png)

After clicking save, you can select the test in the `Execute Saved Test` list above 
and press `test` to open a new spreadsheet with the Add-on enabled.

![execute test](static/installation_github_execute_test.png)

## Using ISA-*

### Loading an ISA Tab template from schema

### Validating entered data

## People

Rance Nault, Michigan State University, naultran@msu.edu, **Team Lead and Corresponding**

Dale George, Northwestern University, dale.george@northwestern.edu

Diana Ma, Hippocampus Analytics, diana.ma@hippocampusanalytics.com

Diego Perez Ruiz, The University of Manchester, diego.perezruiz@manchester.ac.uk

Anthony Valente, University of Washington, valenta4@uw.edu
