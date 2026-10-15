# Huining Yuan's academic homepage

A static homepage for <https://huiningyuan.github.io/>. Repository: <https://github.com/HuiningYuan/huiningyuan.github.io>.

## Preview locally

From this directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit <http://127.0.0.1:8000/>. No package installation or build step is needed. The page can also be opened directly through `index.html`.

## Edit

- `index.html`: biography, publications, experience, education, honors, and links.
- `styles.css`: layout, typography, responsive styles, and print styles.
- `script.js`: active navigation indication. Content does not depend on JavaScript.
- `assets/images/`: portrait and paper thumbnails.
- `assets/logos/`: local organization marks for Infinigence AI, ByteDance, Tsinghua University, and Beihang University.
- `assets/fonts/`: self-hosted Source Sans 3 and its SIL Open Font License.

The ActionOPD title and Paper link both point to <https://arxiv.org/abs/2610.19820>. Project, Code, and Models use the renamed official ActionOPD URLs. Local CV and manuscript PDFs are not published.

## Content sources and decisions

- Personal information, education, work, research, and awards come from `../English_CV/cv-en.pdf`, with paper links also checked against the adjacent TeX source.
- The author subsequently confirmed three current advisors, in order: Prof. Yu Wang, Dr. Chao Yu, and Prof. Xiao-Ping Zhang. The 2025 Future Scholar Scholarship at Tsinghua University (清华大学2025未来学者奖学金) was added as the first honor.
- The biography's research topics use the author's revised wording: LLM agents, reinforcement learning, action-level credit assignment, process rewards, and multi-agent systems. Publication titles retain their original names.
- The author confirmed Infinigence AI employment as **Jun. 2025–Sep. 2025**. This corrects the older PDF's `Present` entry. The original CV itself has not been edited.
- ActionOPD uses Figure 2 from the author's current manuscript in `[ICLR'27] ActionOPD/arxiv_v1`, with public paper, project, code, and model links. Its title matches the arXiv record: **ActionOPD: Distilling Decisions, Not Tokens**. It is listed as a **2026 preprint**, with no conference acceptance implied.
- VPR uses the current project page and manuscript. Its thumbnail stacks Figure 1 (`figs/overview.pdf`) above Figure 2 (`figs/vpr.pdf`) from the author's `vpr_arxiv_v3` directory, preserving their proportions at equal width. It is listed as a preprint rather than repeating a historical submission status.
- MARSHAL's authors, ICLR 2026 venue, links, and thumbnail were verified from its arXiv record and project page.
- KDD and Nature Computational Science titles and authors were verified using the publishers' DOI records via Crossref. TEMPO was checked against the NeurIPS proceedings and author code repository.
- Equal-contribution markers follow the supplied manuscripts and public records. The page does not repeat review scores or percentile claims from the CV.
- The publication order follows the author's preference: ActionOPD, VPR, MARSHAL, the Nature Computational Science paper, TEMPO, and the KDD paper last.
- The portrait comes from `../English_CV/personal_image.jpg`. Paper illustrations remain the authors' original figures, resized only for web delivery.
- BILLIE's thumbnail is the first comprehensive results figure, Figure 2 on PDF page 4 of `../papers/nature_comp_sci_billie.pdf`. TEMPO uses Figure 1 on PDF page 3 of the supplied NeurIPS 2023 paper. HA-PFD uses the teacher–student diagram in Figure 2(b) on PDF page 3 of `../papers/kdd25_hapfd.pdf`. Crops exclude surrounding prose and captions.
- Chao Yu's advisor links use the author-supplied homepage, <https://zoeyuchao.github.io/>.
- Source Sans 3 is self-hosted from Google Fonts and distributed under the included SIL Open Font License. No third-party font requests, analytics, or remote image dependencies are needed to display the page.
- Organization logo sources: Infinigence AI's purple mark is cropped from the author-supplied `../logo-dbb1c998.png`; [ByteDance](https://www.bytedance.com/?lang=en) (embedded brand icon), [Tsinghua visual identity](https://vi.tsinghua.edu.cn/gk/xxbz/xh/bzjbzsy.htm) (seal), and [Global Beihang](https://global.buaa.edu.cn/en/) (seal extracted from the university's logo) use official sources. The marks identify the corresponding institutions in the author's work and education history.

## GitHub Pages

After reviewing and pushing the files, GitHub Pages can serve the repository root from `main`: **Settings → Pages → Deploy from a branch → main → /(root)**. `.nojekyll` preserves the static files without a Jekyll build. If the repository's local branch is named differently, set the intended branch before publishing.

## Local validation

Checked in Chromium at 320, 390, 768, 1024, and 1440 pixels. No horizontal page overflow was found. The six publication entries, paper order, local images, fonts, and resource links were checked. The browser reports no errors or warnings. Temporary screenshots, browser logs, and source-render intermediates are not part of the published site.
