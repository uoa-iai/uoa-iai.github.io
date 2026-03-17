const DEFAULT_PUBLICATIONS = [
  {
    id: 'bliu2025industrial',
    year: '2025',
    tag: 'automation',
    title: 'Industrial Intelligence: Methods and Applications',
    authors: 'Liu, T.; Bao, J.; Zheng, Y.; Lu, Y.',
    venue: 'Springer (2025)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/978-3-031-81477-8' }],
  },
  {
    id: 'bFu2025134',
    year: '2025',
    tag: 'automation',
    title: 'Digital twin technology in modern machining: A comprehensive review of research on machining errors',
    authors: 'Fu, X.; Song, H.; Li, S.; Lu, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 79, pp. 134–161 (2025)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2025.01.005' }],
  },
  {
    id: 'bYang2025',
    year: '2025',
    tag: 'hrc',
    title: 'ATD-GCN: A human activity recognition approach for human-robot collaboration based on adaptive skeleton tree-decomposition',
    authors: 'Yang, X.; Weng, C.; Jiao, L.; Liu, T.; Leng, J.; Lu, Y.; Wang, B.; Ni, Z.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 95 (2025)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2025.103019' }],
  },
  {
    id: 'bFu2025b',
    year: '2025',
    tag: 'automation',
    title: 'Digital Twin-driven multi-scale characterization of machining quality: current status, challenges, and future perspectives',
    authors: 'Fu, X.; Li, S.; Song, H.; Lu, Y.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 93 (2025)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2024.102902' }],
  },
  {
    id: 'bYan2025136',
    year: '2025',
    tag: 'automation',
    title: 'Digital twin and parameter correlation-enabled variant design of production lines',
    authors: 'Yan, D.; Yang, J.; Zhu, X.; Leng, J.; Zhang, D.; Lu, Y.; Liu, Q.',
    venue: 'International Journal of Computer Integrated Manufacturing, Vol. 38, pp. 136–157 (2025)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1080/0951192X.2023.2294447' }],
  },
  {
    id: 'bXu2025',
    year: '2025',
    tag: 'automation',
    title: 'Automation in manufacturing and assembly of industrialised construction',
    authors: 'Xu, L.; Zou, Y.; Lu, Y.; Chang-Richards, A.',
    venue: 'Automation in Construction, Vol. 170 (2025)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.autcon.2024.105945' }],
  },
  {
    id: 'bChand2024432',
    year: '2024',
    tag: 'hrc',
    title: 'A vision-enabled fatigue-sensitive human digital twin towards human-centric human-robot collaboration',
    authors: 'Chand, S.; Zheng, H.; Lu, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 77, pp. 432–445 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2024.10.002' }],
  },
  {
    id: 'bKeshvarparast2024',
    year: '2024',
    tag: 'hrc',
    title: 'Ergonomic design of Human-Robot collaborative workstation in the Era of Industry 5.0',
    authors: 'Keshvarparast, A.; Berti, N.; Chand, S.; Guidolin, M.; Lu, Y.; Battaia, O.; Xu, X.; Battini, D.',
    venue: 'Computers and Industrial Engineering, Vol. 198 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.cie.2024.110729' }],
  },
  {
    id: 'bQin2024',
    year: '2024',
    tag: 'automation',
    title: 'Knowledge graph-enhanced multi-agent reinforcement learning for adaptive scheduling in smart manufacturing',
    authors: 'Qin, Z.; Lu, Y.',
    venue: 'Journal of Intelligent Manufacturing (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/s10845-024-02494-0' }],
  },
  {
    id: 'bXia2024a',
    year: '2024',
    tag: 'automation',
    title: 'Semantic knowledge-driven A-GASeq: A dynamic graph learning approach for assembly sequence optimization',
    authors: 'Xia, L.; Lu, J.; Lu, Y.; Gao, W.; Fan, Y.; Xu, Y.; Zhang, H.',
    venue: 'Computers in Industry, Vol. 154 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.compind.2023.104040' }],
  },
  {
    id: 'bSun202483',
    year: '2024',
    tag: 'automation',
    title: 'Empowering digital twins with large language models for global temporal feature learning',
    authors: 'Sun, Y.; Zhang, Q.; Bao, J.; Lu, Y.; Liu, S.',
    venue: 'Journal of Manufacturing Systems, Vol. 74, pp. 83–99 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2024.02.015' }],
  },
  {
    id: 'bWang2024102',
    year: '2024',
    tag: 'automation',
    title: 'Ensemble Bayesian Network for root cause analysis of product defects via learning from historical production data',
    authors: 'Wang, K.; Liu, C.; Lu, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 75, pp. 102–115 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2024.06.001' }],
  },
  {
    id: 'bLee202427',
    year: '2024',
    tag: 'hrc',
    title: 'Split-hand Assembly Action Recognition Enhanced With Knowledge-driven Sequence Reasoning',
    authors: 'Lee, R.; Zheng, H.; Johnson, D.; Liarokapis, M.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE59546.2024.10711362' }],
  },
  {
    id: 'bLee2024',
    year: '2024',
    tag: 'hrc',
    title: 'Human-Robot Shared Assembly Taxonomy: A step toward seamless human-robot knowledge transfer',
    authors: 'Lee, R.; Zheng, H.; Lu, Y.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 86 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2023.102686' }],
  },
  {
    id: 'bHuang202492',
    year: '2024',
    tag: 'automation',
    title: 'A multi-objective joint optimisation method for simultaneous part family formation and configuration design in delayed reconfigurable manufacturing system (D-RMS)',
    authors: 'Huang, S.; Tan, J.; Lu, Y.; Moghaddam, S.; Wang, G.; Yan, Y.',
    venue: 'International Journal of Production Research, Vol. 62, pp. 92–109 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1080/00207543.2023.2223725' }],
  },
  {
    id: 'bZheng20247175',
    year: '2024',
    tag: 'hrc',
    title: 'DuCAS: A knowledge-enhanced dual-hand compositional action segmentation method for human-robot collaborative assembly',
    authors: 'Zheng, H.; Lee, R.; Liang, H.; Lu, Y.; Xu, X.',
    venue: 'IEEE International Conference on Intelligent Robots and Systems (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/IROS58592.2024.10802758' }],
  },
  {
    id: 'bLu20241',
    year: '2024',
    tag: 'automation',
    title: 'Smart manufacturing enabled by intelligent technologies',
    authors: 'Lu, Y.; Wang, L.; Nassehi, A.; Wan, J.',
    venue: 'International Journal of Computer Integrated Manufacturing, Vol. 37, pp. 1–3 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1080/0951192X.2023.2296185' }],
  },
  {
    id: 'bXia2024b',
    year: '2024',
    tag: 'hrc',
    title: 'Augmented reality and indoor positioning based mobile production monitoring system to support workers with human-in-the-loop',
    authors: 'Xia, L.; Lu, J.; Lu, Y.; Zhang, H.; Fan, Y.; Zhang, Z.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 86 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2023.102664' }],
  },
  {
    id: 'bGuo2024',
    year: '2024',
    tag: 'automation',
    title: 'A method for constructing a machining knowledge graph using an improved transformer',
    authors: 'Guo, L.; Li, X.; Yan, F.; Lu, Y.; Shen, W.',
    venue: 'Expert Systems with Applications, Vol. 237 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.eswa.2023.121448' }],
  },
  {
    id: 'bLiu2024323',
    year: '2024',
    tag: 'automation',
    title: 'A systematic framework for tackling anomalous pre-welding workpiece postures with regular butt joints based on prototype features',
    authors: 'Liu, H.; Tian, Y.; Lu, Y.; Feng, J.; Wang, T.; Li, L.; Jiang, M.',
    venue: 'Journal of Manufacturing Systems, Vol. 72, pp. 323–337 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2023.11.018' }],
  },
  {
    id: 'bXia20241246',
    year: '2024',
    tag: 'embodied',
    title: 'Deep reinforcement learning based proactive dynamic obstacle avoidance for safe human-robot collaboration',
    authors: 'Xia, W.; Lu, Y.; Xu, W.; Xu, X.',
    venue: 'Manufacturing Letters, Vol. 41, pp. 1246–1256 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.mfglet.2024.09.151' }],
  },
  {
    id: 'bHuang202413135',
    year: '2024',
    tag: 'automation',
    title: 'Deep Reinforcement Learning-Based Dynamic Reconfiguration Planning for Digital Twin-Driven Smart Manufacturing Systems With Reconfigurable Machine Tools',
    authors: 'Huang, J.; Huang, S.; Moghaddam, S.; Lu, Y.; Wang, G.; Yan, Y.; Shi, X.',
    venue: 'IEEE Transactions on Industrial Informatics, Vol. 20, pp. 13135–13146 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/TII.2024.3431095' }],
  },
  {
    id: 'bZhang2024',
    year: '2024',
    tag: 'automation',
    title: 'Dynamic decision-making for knowledge-enabled distributed resource configuration in cloud manufacturing considering stochastic order arrival',
    authors: 'Zhang, Y.; Zhang, Z.; Lu, Y.; Zhu, H.; Tang, D.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 87 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2023.102712' }],
  },
  {
    id: 'bHu2024',
    year: '2024',
    tag: 'hrc',
    title: 'An ontology and rule-based method for human–robot collaborative disassembly planning in smart remanufacturing',
    authors: 'Hu, Y.; Liu, C.; Zhang, M.; Lu, Y.; Jia, Y.; Xu, Y.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 89 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2024.102766' }],
  },
  {
    id: 'bGuo202425',
    year: '2024',
    tag: 'automation',
    title: 'Industrial metaverse towards Industry 5.0: Connotation, architecture, enablers, and challenges',
    authors: 'Guo, J.; Leng, J.; Zhao, J.; Zhou, X.; Yuan, Y.; Lu, Y.; Mourtzis, D.; Qi, Q.; Huang, S.; Song, X.; Liu, Q.; Wang, L.',
    venue: 'Journal of Manufacturing Systems, Vol. 76, pp. 25–42 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2024.07.007' }],
  },
  {
    id: 'bLiang2024381',
    year: '2024',
    tag: 'hrc',
    title: 'Context-aware cognitive assistive assembly system based on online human action recognition',
    authors: 'Liang, H.; Zheng, H.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE59546.2024.10711415' }],
  },
  {
    id: 'bZheng2024522',
    year: '2024',
    tag: 'hrc',
    title: 'DuHa: a dual-hand action segmentation method for human-robot collaborative assembly',
    authors: 'Zheng, H.; Lee, R.; Lu, Y.; Xu, X.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE59546.2024.10711776' }],
  },
  {
    id: 'bJohnson20242924',
    year: '2024',
    tag: 'automation',
    title: 'Multi-Agent Scheduler for the Continuous Dynamic Flexible Job Shop Scheduling Problem',
    authors: 'Johnson, D.; Chen, G.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE59546.2024.10711538' }],
  },
  {
    id: 'bLiu2024a',
    year: '2024',
    tag: 'automation',
    title: 'A task-centric knowledge graph construction method based on multi-modal representation learning for industrial maintenance automation',
    authors: 'Liu, Z.; Lu, Y.',
    venue: 'Engineering Reports, Vol. 6 (2024)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1002/eng2.12952' }],
  },
  {
    id: 'bSun2023560',
    year: '2023',
    tag: 'automation',
    title: 'Prognostics and health management via long short-term digital twins',
    authors: 'Sun, Y.; Lu, Y.; Bao, J.; Tao, F.',
    venue: 'Journal of Manufacturing Systems, Vol. 68, pp. 560–575 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2023.05.023' }],
  },
  {
    id: 'bKrupas2023',
    year: '2023',
    tag: 'embodied',
    title: 'Human-Centric UAV-UGV Collaboration',
    authors: 'Krupas, M.; Chand, S.; Lu, Y.; Xu, X.; Kajati, E.; Zolotova, I.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE56687.2023.10260412' }],
  },
  {
    id: 'bLiu2023a',
    year: '2023',
    tag: 'automation',
    title: 'One-shot, integrated positioning for welding initial points via co-mapping of cross and parallel stripes',
    authors: 'Liu, H.; Tian, Y.; Li, L.; Lu, Y.; Xi, F.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 84 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2023.102602' }],
  },
  {
    id: 'bXia2023',
    year: '2023',
    tag: 'embodied',
    title: 'Application and Evaluation of Soft-Actor Critic Reinforcement Learning in Constrained Trajectory Planning for 6DOF Robotic Manipulators',
    authors: 'Xia, W.; Lu, Y.; Xu, X.',
    venue: '2023 29th International Conference on Mechatronics and Machine Vision in Practice, M2VIP 2023 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/M2VIP58386.2023.10413400' }],
  },
  {
    id: 'bLiu2023b',
    year: '2023',
    tag: 'automation',
    title: 'Full-cycle data purification strategy for multi-type weld seam classification with few-shot learning',
    authors: 'Liu, H.; Tian, Y.; Li, L.; Lu, Y.; Feng, J.; Xi, F.',
    venue: 'Computers in Industry, Vol. 150 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.compind.2023.103939' }],
  },
  {
    id: 'bQin2023242',
    year: '2023',
    tag: 'automation',
    title: 'Dynamic production scheduling towards self-organizing mass personalization: A multi-agent dueling deep reinforcement learning approach',
    authors: 'Qin, Z.; Johnson, D.; Lu, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 68, pp. 242–257 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2023.03.003' }],
  },
  {
    id: 'bHu2023',
    year: '2023',
    tag: 'automation',
    title: 'An Ontology-Based Product Modelling Method for Smart Remanufacturing',
    authors: 'Hu, Y.; Liu, C.; Zhang, M.; Lu, Y.; Jia, Y.; Xu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE56687.2023.10260547' }],
  },
  {
    id: 'bChand2023508',
    year: '2023',
    tag: 'hrc',
    title: 'Dynamic muscle fatigue assessment using s-EMG technology towards human-centric human-robot collaboration',
    authors: 'Chand, S.; McDaid, A.; Lu, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 68, pp. 508–522 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2023.05.022' }],
  },
  {
    id: 'bQin202396',
    year: '2023',
    tag: 'automation',
    title: 'A Knowledge Graph-based knowledge representation for adaptive manufacturing control under mass personalization',
    authors: 'Qin, Z.; Lu, Y.',
    venue: 'Manufacturing Letters, Vol. 35, pp. 96–104 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.mfglet.2023.08.086' }],
  },
  {
    id: 'bZheng2023a',
    year: '2023',
    tag: 'hrc',
    title: 'Video-Based Fatigue Estimation for Human-Robot Task Allocation Optimisation',
    authors: 'Zheng, H.; Chand, S.; Keshvarparast, A.; Battini, D.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE56687.2023.10260460' }],
  },
  {
    id: 'bZheng2023b',
    year: '2023',
    tag: 'hrc',
    title: 'HA-ViD: A Human Assembly Video Dataset for Comprehensive Assembly Knowledge Understanding',
    authors: 'Zheng, H.; Lee, R.; Lu, Y.',
    venue: 'Advances in Neural Information Processing Systems, Vol. 36 (2023)',
    links: [{ label: 'URL', url: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85191195565' }],
  },
  {
    id: 'bLiu2023c',
    year: '2023',
    tag: 'automation',
    title: 'A blockchain-based interactive approach between digital twin-based manufacturing systems',
    authors: 'Liu, S.; Lu, Y.; Li, J.; Shen, X.; Sun, X.; Bao, J.',
    venue: 'Computers and Industrial Engineering, Vol. 175 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.cie.2022.108827' }],
  },
  {
    id: 'bLiu2023145',
    year: '2023',
    tag: 'automation',
    title: 'A digital thread-driven distributed collaboration mechanism between digital twin manufacturing units',
    authors: 'Liu, S.; Lu, Y.; Shen, X.; Bao, J.',
    venue: 'Journal of Manufacturing Systems, Vol. 68, pp. 145–159 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2023.02.014' }],
  },
  {
    id: 'bZhou20234117',
    year: '2023',
    tag: 'automation',
    title: 'Semantic-aware event link reasoning over industrial knowledge graph embedding time series data',
    authors: 'Zhou, B.; Shen, X.; Lu, Y.; Li, X.; Hua, B.; Liu, T.; Bao, J.',
    venue: 'International Journal of Production Research, Vol. 61, pp. 4117–4134 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1080/00207543.2021.2022803' }],
  },
  {
    id: 'bZhou20232708',
    year: '2023',
    tag: 'automation',
    title: 'Causal knowledge modeling for root cause analysis of equipment spot-inspection failure',
    authors: 'Zhou, B.; Hua, B.; Lu, Y.; Li, X.; Li, J.; Bag, J.',
    venue: 'Jisuanji Jicheng Zhizao Xitong/Computer Integrated Manufacturing Systems, CIMS, Vol. 29, pp. 2708–2721 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.13196/j.cims.2023.08.017' }],
  },
  {
    id: 'bXu2023',
    year: '2023',
    tag: 'automation',
    title: 'Editorial Proceedings of 2023 IEEE 19th International Conference on Automation Science and Engineering (CASE) - Automation for a Resilient Society',
    authors: 'Xu, X.; Vogel-Heuser, B.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE56687.2023.10260471' }],
  },
  {
    id: 'bChand202388',
    year: '2023',
    tag: 'hrc',
    title: 'Dual task scheduling strategy for personalized multi-objective optimization of cycle time and fatigue in human-robot collaboration',
    authors: 'Chand, S.; Lu, Y.',
    venue: 'Manufacturing Letters, Vol. 35, pp. 88–95 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.mfglet.2023.08.064' }],
  },
  {
    id: 'bWang20231',
    year: '2023',
    tag: '',
    title: 'Vibration-based and computer vision-aided nondestructive health condition evaluation of rail track structures',
    authors: 'Wang, S.; Zheng, H.; Tang, L.; Li, Z.; Zhao, R.; Lu, Y.; Aw, K.',
    venue: 'Journal of Civil Structural Health Monitoring, Vol. 13, pp. 1–14 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/s13349-022-00616-x' }],
  },
  {
    id: 'bLiu2023170',
    year: '2023',
    tag: 'automation',
    title: 'Automatic Extraction and Representation of Procedural Knowledge from Manuals',
    authors: 'Liu, Z.; Ye, X.; Bao, J.; Lu, Y.',
    venue: 'Proceedings - 2023 4th International Conference on Computer, Big Data and Artificial Intelligence, ICCBD+AI 2023 (2023)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/ICCBD-AI62252.2023.00037' }],
  },
  {
    id: 'brong2022human',
    year: '2022',
    tag: 'hrc',
    title: 'Human-robot collaborative assembly based on cps',
    authors: 'Zhang, R.; Bao, J.; Lu, Y.; Li, J.; Lv, Q.',
    venue: 'Cyber-Physical Systems, CRC Press (2022)',
    links: [],
  },
  {
    id: 'bTao2022',
    year: '2022',
    tag: '',
    title: 'Experimental energy consumption analysis of neural network model compression methods on microcontrollers with applications in bird call classification',
    authors: 'Tao, Y.; Hioka, Y.; Lu, Y.',
    venue: 'Proceedings of IEEE Asia-Pacific Conference on Computer Science and Data Engineering, CSDE 2022 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CSDE56538.2022.10089354' }],
  },
  {
    id: 'bWang20224117',
    year: '2022',
    tag: 'automation',
    title: 'Dynamic inventory replenishment strategy for aerospace manufacturing supply chain: combining reinforcement learning and multi-agent simulation',
    authors: 'Wang, H.; Tao, J.; Peng, T.; Brintrup, A.; Kosasih, E.; Lu, Y.; Tang, R.; Hu, L.',
    venue: 'International Journal of Production Research, Vol. 60, pp. 4117–4136 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1080/00207543.2021.2020927' }],
  },
  {
    id: 'bYe2022',
    year: '2022',
    tag: 'automation',
    title: 'Automated conversion of engineering rules: Towards flexible manufacturing collaboration',
    authors: 'Ye, X.; Lu, Y.; Manoharan, S.',
    venue: 'Results in Engineering, Vol. 16 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rineng.2022.100680' }],
  },
  {
    id: 'bLu2022',
    year: '2022',
    tag: 'automation',
    title: 'Semantic artificial intelligence for smart manufacturing automation',
    authors: 'Lu, Y.; Wang, L.; Bao, J.; Lastra, J.; Ameri, F.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 77 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2022.102333' }],
  },
  {
    id: 'bLiu2022a',
    year: '2022',
    tag: 'automation',
    title: 'Adaptive reconstruction of digital twins for machining systems: A transfer learning approach',
    authors: 'Liu, S.; Lu, Y.; Zheng, P.; Shen, H.; Bao, J.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 78 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2022.102390' }],
  },
  {
    id: 'bBao2022103',
    year: '2022',
    tag: 'hrc',
    title: 'Digital-twin Collaborative Technology for Human-robot-environment Integration',
    authors: 'Bao, J.; Zhang, R.; Li, J.; Lu, Y.; Peng, T.',
    venue: 'Jixie Gongcheng Xuebao/Journal of Mechanical Engineering, Vol. 58, pp. 103–115 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.3901/JME.2022.18.103' }],
  },
  {
    id: 'bZhu2022330',
    year: '2022',
    tag: 'automation',
    title: 'Dynamic reconfiguration optimization of intelligent manufacturing system with human-robot collaboration based on digital twin',
    authors: 'Zhu, Q.; Huang, S.; Wang, G.; Moghaddam, S.; Lu, Y.; Yan, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 65, pp. 330–338 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2022.09.021' }],
  },
  {
    id: 'bJacob2022643',
    year: '2022',
    tag: 'automation',
    title: 'Cloud Manufacturing - An Overview of Developments In Critical Areas, Prototypes, and Future Perspectives',
    authors: 'Jacob, I.; Lu, Y.; Xu, X.',
    venue: 'IFAC-PapersOnLine (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.ifacol.2022.09.474' }],
  },
  {
    id: 'bGuo2022',
    year: '2022',
    tag: 'automation',
    title: 'An automatic method for constructing machining process knowledge base from knowledge graph',
    authors: 'Guo, L.; Yan, F.; Li, T.; Yang, T.; Lu, Y.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 73 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2021.102222' }],
  },
  {
    id: 'bLu2022612',
    year: '2022',
    tag: 'hrc',
    title: 'Outlook on human-centric manufacturing towards Industry 5.0',
    authors: 'Lu, Y.; Zheng, H.; Chand, S.; Xia, W.; Liu, Z.; Xu, X.; Wang, L.; Qin, Z.; Bao, J.',
    venue: 'Journal of Manufacturing Systems, Vol. 62, pp. 612–627 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2022.02.001' }],
  },
  {
    id: 'bZhang2022',
    year: '2022',
    tag: 'hrc',
    title: 'A fusion-based spiking neural network approach for predicting collaboration request in human-robot collaboration',
    authors: 'Zhang, R.; Li, J.; Zheng, P.; Lu, Y.; Bao, J.; Sun, X.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 78 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2022.102383' }],
  },
  {
    id: 'bJohnson20227684',
    year: '2022',
    tag: 'automation',
    title: 'Multi-Agent Reinforcement Learning for Real-Time Dynamic Production Scheduling in a Robot Assembly Cell',
    authors: 'Johnson, D.; Chen, G.; Lu, Y.',
    venue: 'IEEE Robotics and Automation Letters, Vol. 7, pp. 7684–7691 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/LRA.2022.3184795' }],
  },
  {
    id: 'bZheng2022',
    year: '2022',
    tag: '',
    title: 'A general fault diagnosis framework for rotating machinery and its flexible application example',
    authors: 'Zheng, H.; Cheng, G.; Lu, Y.; Liu, C.; Li, Y.',
    venue: 'Measurement: Journal of the International Measurement Confederation, Vol. 199 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.measurement.2022.111497' }],
  },
  {
    id: 'bChohan20221329',
    year: '2022',
    tag: 'automation',
    title: 'MES Dynamic interoperability for SMEs in the Factory of the Future perspective',
    authors: 'Chohan, B.; Xu, X.; Lu, Y.',
    venue: 'Procedia CIRP (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.procir.2022.05.153' }],
  },
  {
    id: 'bLiu2022b',
    year: '2022',
    tag: 'automation',
    title: 'Service-oriented industrial internet of things gateway for cloud manufacturing',
    authors: 'Liu, C.; Su, Z.; Xu, X.; Lu, Y.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 73 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2021.102217' }],
  },
  {
    id: 'bLiu2022811',
    year: '2022',
    tag: 'automation',
    title: '3DSMDA-Net: An improved 3DCNN with separable structure and multi-dimensional attention for welding status recognition',
    authors: 'Liu, T.; Wang, J.; Huang, X.; Lu, Y.; Bao, J.',
    venue: 'Journal of Manufacturing Systems, Vol. 62, pp. 811–822 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2021.01.017' }],
  },
  {
    id: 'bWang20225011',
    year: '2022',
    tag: '',
    title: 'Special issue on computational intelligence-based modeling, control and estimation in modern mechatronic systems',
    authors: 'Wang, H.; Zheng, J.; Lu, Y.; Ding, S.; Chaoui, H.',
    venue: 'Neural Computing and Applications, Vol. 34, pp. 5011–5013 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/s00521-021-06818-6' }],
  },
  {
    id: 'bLiu2022390',
    year: '2022',
    tag: 'automation',
    title: 'Establishing a reliable mechanism model of the digital twin machining system: An adaptive evaluation network approach',
    authors: 'Liu, S.; Sun, Y.; Zheng, P.; Lu, Y.; Bao, J.',
    venue: 'Journal of Manufacturing Systems, Vol. 62, pp. 390–401 (2022)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2021.12.008' }],
  },
  {
    id: 'bGuo20211348',
    year: '2021',
    tag: 'automation',
    title: 'An automatic machining process decision-making system based on knowledge graph',
    authors: 'Guo, L.; Yan, F.; Lu, Y.; Zhou, M.; Yang, T.',
    venue: 'International Journal of Computer Integrated Manufacturing, Vol. 34, pp. 1348–1369 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1080/0951192X.2021.1972461' }],
  },
  {
    id: 'bLiu2021771',
    year: '2021',
    tag: 'automation',
    title: 'An adaptive evolutionary framework for the decision-making models of digital twin machining system',
    authors: 'Liu, S.; Shen, H.; Li, J.; Lu, Y.; Bao, J.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE49439.2021.9551595' }],
  },
  {
    id: 'bFan2021',
    year: '2021',
    tag: 'automation',
    title: 'A machining accuracy informed adaptive positioning method for finish machining of assembly interfaces of large-scale aircraft components',
    authors: 'Fan, W.; Zheng, L.; Ji, W.; Xu, X.; Lu, Y.; Wang, L.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 67 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2020.102021' }],
  },
  {
    id: 'bLiu2021a',
    year: '2021',
    tag: 'automation',
    title: 'Multi-scale evolution mechanism and knowledge construction of a digital twin mimic model',
    authors: 'Liu, S.; Lu, Y.; Li, J.; Song, D.; Sun, X.; Bao, J.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 71 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2021.102123' }],
  },
  {
    id: 'bLu2021734',
    year: '2021',
    tag: 'hrc',
    title: 'Humans Are Not Machines—Anthropocentric Human–Machine Symbiosis for Ultra-Flexible Smart Manufacturing',
    authors: 'Lu, Y.; Adrados, J.; Chand, S.; Wang, L.',
    venue: 'Engineering, Vol. 7, pp. 734–737 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.eng.2020.09.018' }],
  },
  {
    id: 'bQin2021',
    year: '2021',
    tag: 'automation',
    title: 'Multi-agent-based self-organizing manufacturing network towards mass personalization',
    authors: 'Qin, Z.; Lu, Y.',
    venue: 'Proceedings of the ASME 2021 16th International Manufacturing Science and Engineering Conference, MSEC 2021 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1115/MSEC2021-63990' }],
  },
  {
    id: 'bChand20211940',
    year: '2021',
    tag: 'hrc',
    title: 'Isometric-Based Approach for Detecting Localized Muscular Fatigue during Complex Dynamic Manufacturing Operations',
    authors: 'Chand, S.; McDaid, A.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE49439.2021.9551478' }],
  },
  {
    id: 'bZhou2021a',
    year: '2021',
    tag: 'automation',
    title: 'A novel knowledge graph-based optimization approach for resource allocation in discrete manufacturing workshops',
    authors: 'Zhou, B.; Bao, J.; Li, J.; Lu, Y.; Liu, T.; Zhang, Q.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 71 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2021.102160' }],
  },
  {
    id: 'bGuo2021257',
    year: '2021',
    tag: 'automation',
    title: 'A hybrid 3D feature recognition method based on rule and graph',
    authors: 'Guo, L.; Zhou, M.; Lu, Y.; Yang, T.; Yang, F.',
    venue: 'International Journal of Computer Integrated Manufacturing, Vol. 34, pp. 257–281 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1080/0951192X.2020.1858507' }],
  },
  {
    id: 'bLv2021837',
    year: '2021',
    tag: 'hrc',
    title: 'A digital twin-driven human-robot collaborative assembly approach in the wake of COVID-19',
    authors: 'Lv, Q.; Zhang, R.; Sun, X.; Lu, Y.; Bao, J.',
    venue: 'Journal of Manufacturing Systems, Vol. 60, pp. 837–851 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2021.02.011' }],
  },
  {
    id: 'bQin202135',
    year: '2021',
    tag: 'automation',
    title: 'Self-organizing manufacturing network: A paradigm towards smart manufacturing in mass personalization',
    authors: 'Qin, Z.; Lu, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 60, pp. 35–47 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2021.04.016' }],
  },
  {
    id: 'bLiu2021180',
    year: '2021',
    tag: 'automation',
    title: 'Digital twin modeling method based on biomimicry for machining aerospace components',
    authors: 'Liu, S.; Bao, J.; Lu, Y.; Li, J.; Lu, S.; Sun, X.',
    venue: 'Journal of Manufacturing Systems, Vol. 58, pp. 180–195 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2020.04.014' }],
  },
  {
    id: 'bWang2021715',
    year: '2021',
    tag: 'embodied',
    title: 'Review of Visual SLAM in Dynamic Environment',
    authors: 'Wang, K.; Yao, X.; Huang, Y.; Liu, M.; Lu, Y.',
    venue: 'Jiqiren/Robot, Vol. 43, pp. 715–732 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.13973/j.cnki.robot.200468' }],
  },
  {
    id: 'bXu2021530',
    year: '2021',
    tag: 'automation',
    title: 'Industry 4.0 and Industry 5.0—Inception, conception and perception',
    authors: 'Xu, X.; Lu, Y.; Vogel-Heuser, B.; Wang, L.',
    venue: 'Journal of Manufacturing Systems, Vol. 61, pp. 530–535 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2021.10.006' }],
  },
  {
    id: 'bLiu20213491',
    year: '2021',
    tag: 'automation',
    title: 'Machining process-oriented monitoring method based on digital twin via augmented reality',
    authors: 'Liu, S.; Lu, S.; Li, J.; Sun, X.; Lu, Y.; Bao, J.',
    venue: 'International Journal of Advanced Manufacturing Technology, Vol. 113, pp. 3491–3508 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/s00170-021-06838-5' }],
  },
  {
    id: 'bLiu2021182',
    year: '2021',
    tag: 'automation',
    title: 'A Knowledge-Driven Digital Twin Modeling Method for Machining Products Based on Biomimicry',
    authors: 'Liu, S.; Sun, X.; Lu, Y.; Wang, B.; Bao, J.; Guo, G.',
    venue: 'Jixie Gongcheng Xuebao/Journal of Mechanical Engineering, Vol. 57, pp. 182–194 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.3901/JME.2021.23.182' }],
  },
  {
    id: 'bHuang2021138',
    year: '2021',
    tag: 'automation',
    title: 'Digital Twin-driven online anomaly detection for an automation system based on edge intelligence',
    authors: 'Huang, H.; Yang, L.; Wang, Y.; Xu, X.; Lu, Y.',
    venue: 'Journal of Manufacturing Systems, Vol. 59, pp. 138–150 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2021.02.010' }],
  },
  {
    id: 'bZhou2021b',
    year: '2021',
    tag: 'automation',
    title: 'An end-to-end tabular information-oriented causality event evolutionary knowledge graph for manufacturing documents',
    authors: 'Zhou, B.; Hua, B.; Gu, X.; Lu, Y.; Peng, T.; Zheng, Y.; Shen, X.; Bao, J.',
    venue: 'Advanced Engineering Informatics, Vol. 50 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.aei.2021.101441' }],
  },
  {
    id: 'bAheleroff2021',
    year: '2021',
    tag: 'automation',
    title: 'Digital Twin as a Service (DTaaS) in Industry 4.0: An Architecture Reference Model',
    authors: 'Aheleroff, S.; Xu, X.; Zhong, R.; Lu, Y.',
    venue: 'Advanced Engineering Informatics, Vol. 47 (2021)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.aei.2020.101225' }],
  },
  {
    id: 'baheleroff2020smart',
    year: '2020',
    tag: 'automation',
    title: 'Smart manufacturing based on digital twin technologies',
    authors: 'Aheleroff, S.; Polzer, J.; Huang, H.; Zhu, Z.; Tomzik, D.; Lu, Y.; Lin, Y.; Xu, X.',
    venue: 'Industry 4.0, CRC Press (2020)',
    links: [],
  },
  {
    id: 'bFlores20201313',
    year: '2020',
    tag: 'automation',
    title: 'Human Cyber-Physical Systems: A skill-based correlation between humans and machines',
    authors: 'Flores, E.; Xu, X.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE48305.2020.9216843' }],
  },
  {
    id: 'bYe2020',
    year: '2020',
    tag: 'automation',
    title: 'Automatic extraction of engineering rules from unstructured text: A natural language processing approach',
    authors: 'Ye, X.; Lu, Y.',
    venue: 'Journal of Computing and Information Science in Engineering, Vol. 20 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1115/1.4046333' }],
  },
  {
    id: 'bLu2020348',
    year: '2020',
    tag: 'automation',
    title: 'Semantic communications between distributed cyber-physical systems towards collaborative automation for smart manufacturing',
    authors: 'Lu, Y.; Asghar, M.',
    venue: 'Journal of Manufacturing Systems, Vol. 55, pp. 348–359 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2020.05.001' }],
  },
  {
    id: 'bFlores2020687',
    year: '2020',
    tag: 'automation',
    title: 'Human Capital 4.0: a workforce competence typology for Industry 4.0',
    authors: 'Flores, E.; Xu, X.; Lu, Y.',
    venue: 'Journal of Manufacturing Technology Management, Vol. 31, pp. 687–703 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1108/JMTM-08-2019-0309' }],
  },
  {
    id: 'bGharbia2020',
    year: '2020',
    tag: 'embodied',
    title: 'Robotic technologies for on-site building construction: A systematic review',
    authors: 'Gharbia, M.; Chang-Richards, A.; Lu, Y.; Zhong, R.; Li, H.',
    venue: 'Journal of Building Engineering, Vol. 32 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jobe.2020.101584' }],
  },
  {
    id: 'bWang20205399',
    year: '2020',
    tag: 'automation',
    title: 'Experimental Investigation of the Surface Roughness of Finish-Machined High-Volume-Fraction SiCp/Al Composites',
    authors: 'Wang, J.; Pan, L.; Bian, Y.; Lu, Y.',
    venue: 'Arabian Journal for Science and Engineering, Vol. 45, pp. 5399–5406 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/s13369-020-04421-w' }],
  },
  {
    id: 'bLu2020',
    year: '2020',
    tag: 'automation',
    title: 'Digital Twin-driven smart manufacturing: Connotation, reference model, applications and research issues',
    authors: 'Lu, Y.; Liu, C.; Wang, K.; Huang, H.; Xu, X.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 61 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2019.101837' }],
  },
  {
    id: 'bLetford2020989',
    year: '2020',
    tag: 'automation',
    title: 'Machine Learning to Empower a Cyber-Physical Machine Tool',
    authors: 'Letford, F.; Rogers, M.; Xu, X.; Lu, Y.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE48305.2020.9216842' }],
  },
  {
    id: 'bQin2020',
    year: '2020',
    tag: 'hrc',
    title: 'A reconfigurable jig assistant assembly system based on wearable devices',
    authors: 'Qin, Z.; Lu, Y.; Zhang, H.; Liu, X.; Zheng, L.',
    venue: 'ASME 2020 15th International Manufacturing Science and Engineering Conference, MSEC 2020 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1115/MSEC2020-8234' }],
  },
  {
    id: 'bLu2020312',
    year: '2020',
    tag: 'automation',
    title: 'Smart manufacturing process and system automation – A critical review of the standards and envisioned scenarios',
    authors: 'Lu, Y.; Xu, X.; Wang, L.',
    venue: 'Journal of Manufacturing Systems, Vol. 56, pp. 312–325 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2020.06.010' }],
  },
  {
    id: 'bAheleroff2020',
    year: '2020',
    tag: 'automation',
    title: 'IoT-enabled smart appliances under industry 4.0: A case study',
    authors: 'Aheleroff, S.; Xu, X.; Lu, Y.; Aristizabal, M.; Velasquez, J.; Joa, B.; Valencia, Y.',
    venue: 'Advanced Engineering Informatics, Vol. 43 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.aei.2020.101043' }],
  },
  {
    id: 'bFan2020',
    year: '2020',
    tag: 'automation',
    title: 'Function block-based closed-loop adaptive machining for assembly interfaces of large-scale aircraft components',
    authors: 'Fan, W.; Zheng, L.; Ji, W.; Xu, X.; Wang, L.; Lu, Y.; Zhao, X.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 66 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2020.101994' }],
  },
  {
    id: 'bXia2020488',
    year: '2020',
    tag: 'embodied',
    title: 'Decentralized coordination of autonomous AGVs for flexible factory automation in the context of Industry 4.0',
    authors: 'Xia, W.; Goh, J.; Cortes, C.; Lu, Y.; Xu, X.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/CASE48305.2020.9216961' }],
  },
  {
    id: 'bRamesh2020',
    year: '2020',
    tag: 'automation',
    title: 'Digital thread enabled manufacturing automation towards mass personalization',
    authors: 'Ramesh, A.; Qin, Z.; Lu, Y.',
    venue: 'ASME 2020 15th International Manufacturing Science and Engineering Conference, MSEC 2020 (2020)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1115/MSEC2020-8429' }],
  },
  {
    id: 'bLu201992',
    year: '2019',
    tag: 'automation',
    title: 'Cloud-based manufacturing equipment and big data analytics to enable on-demand manufacturing services',
    authors: 'Lu, Y.; Xu, X.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 57, pp. 92–102 (2019)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2018.11.006' }],
  },
  {
    id: 'bLu201973',
    year: '2019',
    tag: 'automation',
    title: 'Standards for smart manufacturing: A review',
    authors: 'Lu, Y.; Huang, H.; Liu, C.; Xu, X.',
    venue: 'IEEE International Conference on Automation Science and Engineering (2019)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/COASE.2019.8842989' }],
  },
  {
    id: 'bLu201956',
    year: '2019',
    tag: 'automation',
    title: 'Energy-efficient cyber-physical production network: Architecture and technologies',
    authors: 'Lu, Y.; Peng, T.; Xu, X.',
    venue: 'Computers and Industrial Engineering, Vol. 129, pp. 56–66 (2019)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.cie.2019.01.025' }],
  },
  {
    id: 'bLu2019317',
    year: '2019',
    tag: 'automation',
    title: 'ManuService ontology: a product data model for service-oriented business interactions in a cloud manufacturing environment',
    authors: 'Lu, Y.; Wang, H.; Xu, X.',
    venue: 'Journal of Intelligent Manufacturing, Vol. 30, pp. 317–334 (2019)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/s10845-016-1250-x' }],
  },
  {
    id: 'bLiu201961',
    year: '2019',
    tag: 'automation',
    title: 'A Cyber-Physical Machine Tools Platform using OPC UA and MTConnect',
    authors: 'Liu, C.; Vengayil, H.; Lu, Y.; Xu, X.',
    venue: 'Journal of Manufacturing Systems, Vol. 51, pp. 61–74 (2019)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2019.04.006' }],
  },
  {
    id: 'bMubarok2018940',
    year: '2018',
    tag: 'automation',
    title: 'Manufacturing service reliability assessment in cloud manufacturing',
    authors: 'Mubarok, K.; Xu, X.; Ye, X.; Zhong, R.; Lu, Y.',
    venue: 'Procedia CIRP (2018)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.procir.2018.03.074' }],
  },
  {
    id: 'bLu2018128',
    year: '2018',
    tag: 'automation',
    title: 'Resource virtualization: A core technology for developing cyber-physical production systems',
    authors: 'Lu, Y.; Xu, X.',
    venue: 'Journal of Manufacturing Systems, Vol. 47, pp. 128–140 (2018)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2018.05.003' }],
  },
  {
    id: 'bLu2018',
    year: '2018',
    tag: 'automation',
    title: 'A digital twin reference model for smart manufacturing',
    authors: 'Lu, Y.; Xu, X.',
    venue: 'Proceedings of International Conference on Computers and Industrial Engineering, CIE (2018)',
    links: [{ label: 'URL', url: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85061302492' }],
  },
  {
    id: 'bMubarok2018',
    year: '2018',
    tag: 'automation',
    title: 'Towards cyber-physical system intelligent services in cloud manufacturing',
    authors: 'Mubarok, K.; Wardhani, R.; Lu, Y.; Xu, X.',
    venue: 'Proceedings of International Conference on Computers and Industrial Engineering, CIE (2018)',
    links: [{ label: 'URL', url: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85061313574' }],
  },
  {
    id: 'bWardhani2018',
    year: '2018',
    tag: 'automation',
    title: 'A review on digital twin in manufacturing process',
    authors: 'Wardhani, R.; Mubarok, K.; Mucha, C.; Kubota, T.; Lu, Y.; Xu, X.',
    venue: 'Proceedings of International Conference on Computers and Industrial Engineering, CIE (2018)',
    links: [{ label: 'URL', url: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85061333722' }],
  },
  {
    id: 'bZheng201773',
    year: '2017',
    tag: 'automation',
    title: 'A system framework for OKP product planning in a cloud-based design environment',
    authors: 'Zheng, P.; Lu, Y.; Xu, X.; Xie, S.',
    venue: 'Robotics and Computer-Integrated Manufacturing, Vol. 45, pp. 73–85 (2017)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.rcim.2016.04.001' }],
  },
  {
    id: 'bLu201769',
    year: '2017',
    tag: 'automation',
    title: 'A semantic web-based framework for service composition in a cloud manufacturing environment',
    authors: 'Lu, Y.; Xu, X.',
    venue: 'Journal of Manufacturing Systems, Vol. 42, pp. 69–81 (2017)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2016.11.004' }],
  },
  {
    id: 'bLu2017',
    year: '2017',
    tag: 'automation',
    title: 'Cyber-physical production network for energy-efficient manufacturing: A framework',
    authors: 'Lu, Y.; Peng, T.; Xu, X.',
    venue: 'Proceedings of International Conference on Computers and Industrial Engineering, CIE (2017)',
    links: [{ label: 'URL', url: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85040931922' }],
  },
  {
    id: 'bYu20155',
    year: '2015',
    tag: 'automation',
    title: 'Computer-Integrated Manufacturing, Cyber-Physical Systems and Cloud Manufacturing - Concepts and relationships',
    authors: 'Yu, C.; Xu, X.; Lu, Y.',
    venue: 'Manufacturing Letters, Vol. 6, pp. 5–9 (2015)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.mfglet.2015.11.005' }],
  },
  {
    id: 'bLu2015',
    year: '2015',
    tag: 'automation',
    title: 'Process and production planning in a cloud manufacturing environment',
    authors: 'Lu, Y.; Xu, X.',
    venue: 'ASME 2015 International Manufacturing Science and Engineering Conference, MSEC 2015 (2015)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1115/MSEC20159382' }],
  },
  {
    id: 'bLu2015404',
    year: '2015',
    tag: 'automation',
    title: 'Protecting intellectual property in a cloud manufacturing environment: Requirements and strategies',
    authors: 'Lu, Y.; Xu, X.',
    venue: 'IFIP Advances in Information and Communication Technology (2015)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/978-3-319-22759-7_47' }],
  },
  {
    id: 'bLu2014551',
    year: '2014',
    tag: 'automation',
    title: 'Development of a Hybrid Manufacturing Cloud',
    authors: 'Lu, Y.; Xu, X.; Xu, J.',
    venue: 'Journal of Manufacturing Systems, Vol. 33, pp. 551–566 (2014)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.jmsy.2014.05.003' }],
  },
  {
    id: 'bLu2014448',
    year: '2014',
    tag: 'automation',
    title: 'Ontology for manufacturing resources in a cloud environment',
    authors: 'Lu, Y.; Shao, Q.; Singh, C.; Xu, X.; Ye, X.',
    venue: 'International Journal of Manufacturing Research, Vol. 9, pp. 448–469 (2014)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1504/IJMR.2014.066666' }],
  },
  {
    id: 'bSingh2014237',
    year: '2014',
    tag: 'automation',
    title: 'Tool selection: A cloud-based approach',
    authors: 'Singh, C.; Shao, Q.; Lu, Y.; Xu, X.; Ye, X.',
    venue: 'Lecture Notes in Electrical Engineering, Vol. 301 (2014)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1007/978-94-017-8798-7_29' }],
  },
  {
    id: 'bLu20141146',
    year: '2014',
    tag: 'automation',
    title: 'Cloud manufacturing for a service-oriented paradigm shift',
    authors: 'Lu, Y.; Xu, X.',
    venue: 'IEEE International Conference on Industrial Engineering and Engineering Management (2014)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1109/IEEM.2014.7058818' }],
  },
  {
    id: 'bLu2013',
    year: '2013',
    tag: 'automation',
    title: 'A new paradigm shift for manufacturing businesses',
    authors: 'Lu, Y.; Xu, J.; Xu, X.',
    venue: 'ASME International Mechanical Engineering Congress and Exposition, Proceedings (IMECE) (2013)',
    links: [{ label: 'DOI', url: 'https://doi.org/10.1115/IMECE2013-62640' }],
  },
];

const DEFAULT_NEWS = [
  {
    id: 'n0',
    date: 'Mar 2026',
    badge: 'Scholarship',
    title: 'Fully Funded PhD Scholarship — Machine Intelligence towards Collaborative Factory Automation',
    body: 'A fully funded PhD scholarship is available in the Industrial AI Research Group, focusing on developing intelligent, collaborative automation systems for the factories of the future.',
    fullContent: `The Industrial AI Research Group at the University of Auckland is offering a fully funded PhD scholarship focused on developing intelligent automation systems for modern factories.

**Research Focus**

The project aims to create automation systems that can learn, adapt, and collaborate with other machines in modern factories. Key research areas include:

- Generalised and embodied intelligence for industrial machines
- Machine learning and adaptive control for collaborative automation
- Situational awareness in manufacturing
- System integration with real-world automation systems

**Supervisors**

The research will be directed by Dr. Yuqian Lu and Professor Andrea Raith.

**Candidate Requirements**

Applicants should have:

- A Master's degree or First-Class Honours in Robotics, Mechatronics, Mechanical Engineering, Computer Science, or related field
- Strong programming skills (Python, ROS, control systems, machine learning frameworks)
- High motivation for intelligent automation research
- Excellent interpersonal abilities to collaborate with industry partners

**Funding and Timeline**

Coverage: Tuition fees plus annual stipend (36 months). Start date by September 2026.

**How to Apply**

Submit your CV, academic transcript, and a brief research interest statement to Dr. Yuqian Lu at yuqian.lu@auckland.ac.nz by **April 1, 2026**.`,
    image: 'https://uoa-iai.github.io/post/hiring_20251012/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n0',
    featured: true,
  },
  {
    id: 'n1',
    date: 'Oct 2025',
    badge: 'Scholarship',
    title: 'Fully Funded PhD Scholarship — Robot Skill Learning',
    body: 'A fully funded PhD scholarship is available in the Industrial AI Research Group, focusing on developing robot skill learning techniques.',
    fullContent: `The Industrial AI Research Group at the University of Auckland is offering a fully funded PhD scholarship focused on robot skill learning. The project aims to develop intelligent robotic systems capable of learning and adapting in industrial environments.

**Project Focus**

The research centers on creating generalised intelligence and learning techniques that allow robots to acquire, store, and reuse skills in dynamic factory settings. Candidates will work under the supervision of Dr. Yuqian Lu and Professor Bruce MacDonald.

**Candidate Requirements**

Applicants should possess:

- A Master's degree or First-Class Honours in Robotics, Mechatronics, Mechanical Engineering, Computer Science, or related fields
- Strong programming skills in Python, ROS, control systems, or machine learning frameworks
- High motivation for intelligent robotic systems research
- Excellent interpersonal abilities for collaboration with research organizations and industry partners

**Funding Details**

The scholarship covers tuition fees plus an annual stipend for 36 months, following the University of Auckland's PhD scholarship rate. The start date is flexible but must be no later than September 2026.

**Application Deadline**

Interested candidates should submit their CV, academic transcript, and a brief research interest statement to Dr. Yuqian Lu at yuqian.lu@auckland.ac.nz by **November 15, 2025**.`,
    image: 'https://uoa-iai.github.io/post/robot-phd/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n1',
    featured: false,
  },
  {
    id: 'n2',
    date: 'Sep 2025',
    badge: 'Seminar',
    title: 'Seminar — Dr. Seyyed Ehsan Hashemi-Petroodi',
    body: 'Delighted to have Dr. Seyyed Ehsan Hashemi-Petroodi share his inspiring insights on robust optimization and assembly line reconfiguration.',
    fullContent: `The Industrial AI Group hosted Dr. Seyyed Ehsan Hashemi-Petroodi, an Assistant Professor in Operations Management and Information Systems, for a guest seminar on September 26, 2025.

**Speaker Background**

Dr. Hashemi-Petroodi earned his Ph.D. in Industrial Engineering and Operations Research from IMT Atlantique in France. His expertise encompasses combinatorial and robust optimization, reconfigurable assembly line design, workforce and process planning, and decision support systems.

**Seminar Content**

The presentation covered research from KEDGE Business School, including the EU Horizon MODALSHIFT project focusing on multimodal transportation and dynamic decision-making.

**Study 1 — Product Evolution**

Dr. Hashemi-Petroodi presented work on managing assembly line design when product families evolve under uncertain demand. A novel mathematical model utilizing Mixed-Integer Linear Programming (MILP) combined with an adversarial approach demonstrated significant cost reductions compared to traditional periodic strategies.

**Study 2 — Dynamic Re-balancing**

The second investigation addressed assembly line rebalancing when facing unpredictable product sequences, modeling this challenge as a Markov Decision Process integrated with MILP. Results showed dynamic task assignments outperformed static approaches.

**Discussion**

The session concluded with collaborative discussion exploring uncertainty challenges in assembly systems and potential applications of reinforcement learning for human-robot collaboration.

![Seminar slide 1](https://uoa-iai.github.io/post/seminar-seyyed/1.jpeg)
![Seminar slide 2](https://uoa-iai.github.io/post/seminar-seyyed/2.jpeg)
![Seminar slide 3](https://uoa-iai.github.io/post/seminar-seyyed/3.jpeg)
![Seminar slide 4](https://uoa-iai.github.io/post/seminar-seyyed/4.jpeg)
![Seminar slide 5](https://uoa-iai.github.io/post/seminar-seyyed/5.jpeg)
![Seminar slide 6](https://uoa-iai.github.io/post/seminar-seyyed/6.jpeg)`,
    image: 'https://uoa-iai.github.io/post/seminar-seyyed/featured.jpeg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n2',
    featured: false,
  },
  {
    id: 'n3',
    date: 'Apr 2025',
    badge: 'Publication',
    title: 'Call for Papers — Embodied Intelligence Empowering Smart Manufacturing',
    body: 'Special Issue for Embodied Intelligence Empowering Smart Manufacturing at Journal of Industrial Information Integration.',
    fullContent: `The Industrial AI Group at the University of Auckland is co-organizing a special issue focused on embodied intelligence in smart manufacturing, published in the Journal of Industrial Information Integration.

**Overview**

Embodied Intelligence (EI) is a key enabler of flexible and efficient manufacturing in smart manufacturing. This special issue addresses challenges including limited adaptability of current AI systems, insufficient knowledge sharing among independent models, and inefficient human-machine collaboration in manufacturing environments.

**Research Topics**

The special issue welcomes submissions on:

- Human-machine interaction and collaboration
- Intelligent equipment maintenance using multimodal data
- Digital twin modeling for intelligent robots
- Multi-agent collaboration and collective intelligence
- Large-scale multimodal data communication networks
- Control system design driven by embodied intelligence

**Timeline**

- Submission portal opens: March 1, 2025
- Manuscript deadline: August 31, 2025
- Editorial acceptance deadline: November 30, 2025

**Guest Editors**

The special issue is led by researchers from South China University of Technology, University of Auckland, University of Iowa, and Augusta University.

Interested researchers should select the article type "VSI: EI - Smart Manufacturing" when submitting through Editorial Manager.`,
    image: 'https://uoa-iai.github.io/post/embodied-intelligence/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n3',
    featured: false,
  },
  {
    id: 'n4',
    date: 'Feb 2025',
    badge: 'Workshop',
    title: 'Strategic Workshop on Future of Human-Robot Collaboration',
    body: 'A diverse group of stakeholders gathered for a successful workshop to discuss future aspirations and development pathways for human-robot collaboration technologies.',
    fullContent: `The Industrial AI Research Group at the University of Auckland organized a strategic workshop focused on exploring the trajectory of human-robot collaboration technologies.

**Key Participants**

The workshop convened representatives from:

- Manufacturing industries
- Investment firms
- Government departments
- Innovation agencies
- Māori researchers

**Main Focus Areas**

Participants engaged in dialogue on strategic directions for technological advancement while considering diverse perspectives, including indigenous knowledge frameworks. The discussions examined how collaborative robots could enhance productivity while addressing cultural, ethical, and social considerations.

**Significance**

The workshop represents an important step in developing a shared vision for human-robot collaboration that balances innovation with responsible implementation across New Zealand's technological landscape.

The event emphasized cross-sector engagement and the integration of multiple viewpoints — including indigenous knowledge systems — in shaping the future of robotics technology development.

![Workshop discussion](https://uoa-iai.github.io/post/mbie-hrc-workshop/6_hud55c09bc534bc6c85aa923d96e341b58_1636054_8aaf208a0f0f0058dee2ecefc7233735.webp)
![Workshop participants](https://uoa-iai.github.io/post/mbie-hrc-workshop/5_huebbfad1edfa8e198fe68a27ac6a615ca_4574734_c46b10da5a5ed1408dea560e912444f9.webp)
![Workshop activity](https://uoa-iai.github.io/post/mbie-hrc-workshop/2_hub177f3ad2366e5874790414f4c6ff930_2554113_37bd50d8d5f1eb4421b09fec43404f47.webp)
![Workshop group](https://uoa-iai.github.io/post/mbie-hrc-workshop/3_hub177f3ad2366e5874790414f4c6ff930_2757208_de8c6f634c81c7f85c9f35fe1c4e0130.webp)
![Workshop session](https://uoa-iai.github.io/post/mbie-hrc-workshop/4_hubf4943ae400af009feda9813a9a2ed78_2038344_f7a970a4f78858dcf54a6602fb0fe956.webp)`,
    image: 'https://uoa-iai.github.io/post/mbie-hrc-workshop/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n4',
    featured: false,
  },
  {
    id: 'n5',
    date: 'Dec 2024',
    badge: 'Award',
    title: 'Best Paper Award at CIE51, 2024',
    body: 'Ilango Kandasamy and Yuqian Lu won the Best Paper Award at the 51st International Conference on Computers and Industrial Engineering for their work on using Large Language Models for human-robot collaboration.',
    fullContent: `The Industrial AI Group celebrates Ilango Kandasamy and Yuqian Lu's Best Paper Award at CIE51 (December 9–11, 2024) at UNSW Sydney for their work on "Instructing Collaborative Robots using Large Language Models for Human-Robot Collaboration."

Kandasamy recently completed his Master of Robotics & Automation Engineering program.

The research addresses human-robot interaction challenges in smart manufacturing. The team explored using Large Language Models to interpret natural language assembly instructions and convert them into executable robot tasks.

Their work evaluated GPT-3.5's performance in semantic parsing using the HA-ViD dataset, demonstrating strong generalisation for previously unseen industrial assembly instructions through prompt-based learning.

The study additionally investigated Vision Language Models for object detection and proposed an end-to-end system architecture illustrating the integration of voice and LLMs, demonstrating GPT-3.5's performance in converting natural language instructions into low-level robot actions for industrial assembly tasks.`,
    image: 'https://uoa-iai.github.io/post/cie-best-paper/featured.webp',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n5',
    featured: false,
  },
  {
    id: 'n6',
    date: 'Sep 2024',
    badge: 'Hiring',
    title: 'We are Hiring — PhD Scholarships & Postdoc on Human-Robot Collaboration (MBIE Endeavour Fund)',
    body: 'The IAI Research Group has secured $1 million NZD from the MBIE Endeavour Fund for "Ultra-flexible human-robot collaborative product assembly," with two PhD positions and one postdoctoral fellowship available.',
    fullContent: `The Industrial AI Research Group has secured $1 million over three years from the Ministry of Business, Innovation and Employment (MBIE) Endeavour Fund to advance "Ultra-flexible human-robot collaborative product assembly."

The project addresses New Zealand's manufacturing productivity challenges by developing technologies enabling seamless human-robot interaction in dynamic, high-mix-low-volume production environments. The approach emphasises robots equipped with real-time human state sensing, adaptive behaviour planning, and multimodal communication interfaces, including support for te reo Māori.

The interdisciplinary team includes experts in human sensing, robot control, human-machine interactions, and Māori knowledge. The initiative incorporates Tikanga and Māori data sovereignty principles while prioritising workplace well-being and cultural sensitivity.

**Available Positions**

- Two full-scholarship PhD positions
- One postdoctoral research fellow position

The application deadline is November 1st, 2024. Interested candidates should review the detailed job descriptions and contact Dr. Yuqian Lu at yuqian.lu@auckland.ac.nz for further information.`,
    image: 'https://uoa-iai.github.io/post/mbie_position/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n6',
    featured: false,
  },
  {
    id: 'n7',
    date: 'Sep 2024',
    badge: 'Award',
    title: 'Dr. Saahil Chand — Dean of Graduate Studies List',
    body: 'Dr. Saahil Chand has been placed on the University of Auckland Dean of Graduate Studies List in recognition of excellence achieved in his PhD thesis, an honour awarded to only a few doctoral graduates each year.',
    fullContent: `Huge congratulations to Saahil Chand on being placed on the Dean of Graduate Studies List (Dean's List) in recognition of excellence achieved with his PhD thesis. This award is made to only a few recipients each year from the large number of doctoral students completing their theses.

"Since this is a premier research degree, the University sets high standards for doctoral examinations and your examiners were international authorities in your field of expertise. I am therefore very pleased to report that they were all especially complimentary regarding the high quality of the content and presentation of your thesis. Congratulations on achieving the award of a place on the Dean's List." — Professor Caroline Daley, Dean of Graduate Studies.`,
    image: 'https://uoa-iai.github.io/post/dean-list/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n7',
    featured: false,
  },
  {
    id: 'n8',
    date: 'Aug 2024',
    badge: 'Event',
    title: 'IAI Research Group at CASE 2024',
    body: 'The Industrial AI Research Group attended the 20th IEEE CASE conference in Bari, Italy, presenting three papers on multi-agent scheduling, assembly action recognition, and an AI-powered assembly assistive system.',
    fullContent: `The Industrial AI Research Group attended the 20th International Conference on Automation Science and Engineering (CASE) in Bari, Italy, from August 28 to September 1, 2024. Three accepted papers were presented:

- **Dazzle Johnson** — "Multi-Agent Scheduler for the Continuous Dynamic Flexible Job Shop Scheduling Problem"
- **Regina Lee** — "Split-Hand Assembly Action Recognition Enhanced with Knowledge-Driven Sequence Reasoning"
- **Huachang (Benedict) Liang** — "Context-Aware Cognitive Assembly Assistive System Based on Online Human Action Recognition"

Dr. Yuqian Lu also demonstrated the Assembly Assistive System during workshops on September 1st.`,
    image: 'https://uoa-iai.github.io/post/case-2024/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n8',
    featured: false,
  },
  {
    id: 'n9',
    date: 'Aug 2024',
    badge: 'Media',
    title: 'Blending Cutting-Edge Science and Commercial Potential',
    body: 'A repost of Dr. Yuqian Lu\'s interview with SfTI National Science Challenge on combining 5G, AI, and robotics for cloud-controlled industrial systems, and his journey from industry back to academia.',
    fullContent: `Below is a repost of Dr. Yuqian Lu's interview with the National Science Challenge, SfTI.

**SfTI-sponsored researcher collaborates with telecoms giants**

For many scientists, success is measured in the number of high-impact papers they publish. For others, it is about training the next generation of innovators. For some, the focus is on commercialisation — translating their research into real-world products. Dr Yuqian Lu from the University of Auckland is a scientist achieving all three, with the support of SfTI.

Dr Lu leads the university's Industrial AI Group, where his team works on everything from human-robot collaboration to next-generation communication for manufacturing systems. "We really believe artificial intelligence and robotics can have a huge impact on industry," he says. "Our work is about transforming the workplace into a more efficient, enjoyable, and sustainable environment."

After completing his PhD in mechatronics at UoA, Dr Lu spent three-and-a-half years in industry, working on manufacturing process automation for NZ-based companies including FRAMECAD Ltd. "It was like a start-up experience within a big company," he explains. "I did everything from leading the R&D, to developing the market strategy and pricing models."

In 2021, Dr Lu received a seed grant from SfTI titled **'Ultra-reliable time-sensitive industrial control in the cloud'**. The project combines automation, artificial intelligence, and 5G communication to improve robotic control in industrial settings, in collaboration with Spark, Nokia, and Victoria University of Wellington.

"Imagine if one day, we could have the world's top surgeon based in the US remotely operating on a patient in Auckland Hospital via robots. Or a fleet of industrial robots are centrally managed remotely." — Dr Yuqian Lu

Joseph Wong, Innovation Lead of Spark New Zealand, noted: "Spark's goal is to help New Zealanders win big in a digital world, and Yuqian's project certainly fits very well into that. The research is very valuable — it basically opens up cloud-based robotics control to industry, and makes it more scalable."`,
    image: 'https://uoa-iai.github.io/post/sfti-interview/image_hu41bf1922b6caa13d4f7634571dcc3c9b_6672409_3a8a832b0c63da55332d6606bbf44db4.webp',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n9',
    featured: false,
  },
  {
    id: 'n10',
    date: 'May 2024',
    badge: 'Publication',
    title: 'Groundbreaking Research in Manufacturing Quality Control from Karen Wang',
    body: 'Master\'s student Karen Wang developed the product-wise Ensemble Bayesian Network (EBN) for root cause analysis of manufacturing defects, demonstrating improved quality risk prediction in the plastics industry in collaboration with AspectPT Ltd.',
    fullContent: `Master's student Karen Wang at the University of Auckland has developed an innovative approach to root cause analysis of product defects, conducted in collaboration with AspectPT Ltd.

Wang's research introduces the **product-wise Ensemble Bayesian Network (EBN)**, a robust and intelligent method for identifying the root causes of manufacturing defects. This novel approach combines Bayesian Networks with ensemble learning techniques, offering a more reliable and interpretable solution to a long-standing challenge in quality control.

The study, co-authored with Chao Liu from Aston University and Yuqian Lu from the University of Auckland, demonstrates significant improvements in:

- Acquiring causal knowledge
- Identifying root causes with probabilities
- Predicting quality risks in production

Tested with real-world data from the plastics industry, the EBN method shows promise for enhancing manufacturing quality and productivity across various sectors. AspectPT Ltd's involvement bridges the gap between theoretical research and industry needs.`,
    image: 'https://uoa-iai.github.io/post/rootcase-jms/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n10',
    featured: false,
  },
  {
    id: 'n11',
    date: 'Jan 2024',
    badge: 'Award',
    title: 'IJPR Top Trending Article on Industrial Knowledge Graph',
    body: 'A paper by Dr. Bin Zhou and Prof. Jinsong Bao on machine learning for industrial time series knowledge extraction was recognised as a Top Trending Article for 2023 in the International Journal of Production Research.',
    fullContent: `Congratulations to Dr. Bin Zhou and Prof. Jinsong Bao for their collaborative work developing machine learning algorithms to extract knowledge from industrial time series data.

Their paper received recognition as a **Top Trending Article for 2023** at the International Journal of Production Research (IJPR).

The achievement highlights the contributions of Dr. Zhou during his PhD studies and reflects a strong ongoing partnership with Prof. Bao at the intersection of industrial knowledge graphs and machine learning for production systems.`,
    image: 'https://uoa-iai.github.io/post/ipjr-2023/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n11',
    featured: false,
  },
  {
    id: 'n12',
    date: 'Nov 2023',
    badge: 'Award',
    title: 'Dr. Yuqian Lu Awarded the 2023 UoA Early Career Research Excellence Award',
    body: 'Dr. Yuqian Lu was recognised as one of seven recipients of the Early Career Research Excellence Award at the University of Auckland\'s 2023 Celebrating Research Excellence event.',
    fullContent: `The University of Auckland recognised researcher contributions at the 2023 Celebrating Research Excellence event on October 19, 2023. The annual ceremony honors exceptional work across all career stages.

Deputy Vice Chancellor Research Professor Frank Bloomfield hosted the event at the Sir Owen G Glenn Building and noted the university's achievement of reaching **68th in the QS world rankings for 2024**.

Dr. Yuqian Lu received recognition as one of seven researchers awarded the **Early Career Research Excellence** category. The presentation ceremony provided an opportunity for the university's research community to celebrate research excellence and acknowledge the calibre of researchers contributing to the institution's impact.`,
    image: 'https://uoa-iai.github.io/post/earlycareer-2023/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n12',
    featured: false,
  },
  {
    id: 'n13',
    date: 'Sep 2023',
    badge: 'Publication',
    title: 'HA-ViD Paper Accepted at NeurIPS 2023',
    body: 'The paper "HA-ViD: A Human Assembly Video Dataset for Comprehensive Assembly Knowledge Understanding" was accepted at NeurIPS 2023, providing a large-scale benchmark for human-robot collaboration and robot skill learning.',
    fullContent: `We are pleased to announce the acceptance of our paper, **"HA-ViD: A Human Assembly Video Dataset for Comprehensive Assembly Knowledge Understanding"** at NeurIPS 2023.

This achievement marks a milestone in our journey toward understanding comprehensive knowledge of assembly applications such as human-robot collaboration, robot skill learning, and assembly process monitoring.

HA-ViD captures the essence of industrial human assembly scenarios through:

- A designed Generic Assembly Box
- A 3-stage progressive assembly setup
- Consistent human-robot shared annotations

The dataset enables research towards understanding natural human behaviours, progressive knowledge acquisition, and two-hand collaboration patterns during assembly.

For more information, please visit the HA-ViD project website.`,
    image: 'https://uoa-iai.github.io/post/havid-neurips/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n13',
    featured: false,
  },
  {
    id: 'n14',
    date: 'Jul 2023',
    badge: 'Media',
    title: 'Yuqian Lu on 1News about AI, Robots and 5G',
    body: 'Dr. Yuqian Lu was interviewed by 1News about how 5G-enabled environments can accelerate industrial productivity through AI and robotics, and how 5G could enable real-time cloud-based robot control.',
    fullContent: `Dr. Yuqian Lu was interviewed by 1News reporter Logan Church about how a 5G-enabled environment can accelerate productivity in conjunction with AI and robotics, and how 5G technology could possibly enable real-time robot control from the cloud.

In 2021, Dr Lu received a seed grant from SfTI National Science Challenge titled **'Ultra-reliable time-sensitive industrial control in the cloud'** — a project combining automation, AI, and 5G communication to improve robotic control in industrial settings, in collaboration with Spark and Nokia.

Today, industrial robots communicate via wired connections between a local controller and the robot body. This ensures precise, time-sensitive movement. However, if this communication could instead happen wirelessly in the cloud, it could offer incredible opportunities.

"Imagine if one day, we could have the world's top surgeon based in the US remotely operating on a patient in Auckland Hospital via robots. Or a fleet of industrial robots are centrally managed remotely." — Dr Yuqian Lu

"The critical piece of the SfTI research is to develop smart algorithms that can compensate for issues that may occur even during 5G data transmission — so that, from an application perspective, a robot can move smoothly, in a time-sensitive way."`,
    image: 'https://uoa-iai.github.io/post/onenews-2023/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n14',
    featured: false,
  },
  {
    id: 'n15',
    date: 'Jun 2023',
    badge: 'Event',
    title: 'EU Horizon 2020 MAIA Project Mid-term Meeting',
    body: 'Dr. Yuqian Lu presented research progress at the MAIA project mid-term meeting, discussing human-centric manufacturing, worker well-being, and human-robot collaboration outcomes in partnership with the University of Padova.',
    fullContent: `On June 6, 2023, Dr. Yuqian Lu presented a research update at the mid-term meeting of the MAIA project, representing The University of Auckland.

He discussed the institution's vision of human-centric manufacturing and progress on understanding and optimising human well-being in manufacturing and human-robot collaboration. He also briefed on collaboration outcomes between the University of Padova and the Industrial AI Team.

## About MAIA

MAIA is a Research and Innovation Staff Exchange initiative funded by the **Horizon 2020** research and innovation programme. It comprises an international academy of 14 academic partners: 7 European universities and 7 Third Countries universities. The focus addresses active ageing industrial workforce problems and needs.

The University of Auckland team develops digital technologies to measure, monitor and optimise human fatigue during human-robot collaborative assembly — with the goal of changing how collaborative workstations are designed and how frontline worker jobs are arranged.`,
    image: 'https://uoa-iai.github.io/post/maia-2023/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n15',
    featured: false,
  },
  {
    id: 'n16',
    date: 'Apr 2023',
    badge: 'Event',
    title: 'Wesley Teh Speaks at TEDxYouth',
    body: 'Wesley Teh, a 14-year-old student mentored by Dr. Yuqian Lu, presented his "Omnitronics" concept at TEDxYouth@StCuthbertsCollege — a cybernetic platform integrating robotics, drones, AI, and self-driving cars.',
    fullContent: `Wesley Teh, a 14-year-old student from Botany Downs Secondary College, will speak at TEDxYouth@StCuthbertsCollege alongside speakers including David Seymour, Member of Parliament and leader of ACT New Zealand.

Wesley will present his invention, **"Omnitronics"** — a concept and platform that brings together technologies evolving around electronics, mechatronics, robotics, drones, and more. Through a cybernetic automated system, this ecosystem enables seamless integration of various AI technologies: robotics, drones, self-driving cars, and nanobots can all communicate and work effectively with one another.

We are pleased to witness the evolution of Wesley's concept under the guidance of Dr. Yuqian Lu, and to observe how Wesley's ideas stimulate thought. We extend our best wishes for his success.

![Omnitronics concept](https://uoa-iai.github.io/post/weslie-teh/omnitronics_hud70a30006a65468db1039d304db7b09c_144695_cd26f455467cdf006958985cec02d373.webp)`,
    image: 'https://uoa-iai.github.io/post/weslie-teh/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n16',
    featured: false,
  },
  {
    id: 'n17',
    date: 'Jan 2023',
    badge: 'Award',
    title: 'Dr. Yuqian Lu Nominated as a Corresponding Expert of Engineering, Elsevier',
    body: 'Dr. Yuqian Lu was nominated as a Corresponding Expert of Engineering by The Chinese Academy of Engineering in December 2022. Engineering is a top-ranked journal with an Impact Factor of 12.8.',
    fullContent: `Dr. Yuqian Lu was nominated as a **Corresponding Expert of Engineering**, Elsevier, by The Chinese Academy of Engineering in December 2022.

Engineering is the official journal of the Chinese Academy of Engineering and Higher Education Press. It is a highly ranked journal with an **Impact Factor of 12.8** and Article Influence of 2.37.`,
    image: 'https://uoa-iai.github.io/post/elsevier-engineering/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n17',
    featured: false,
  },
  {
    id: 'n18',
    date: 'Jan 2023',
    badge: 'Visit',
    title: 'Visit from Professor Olga Battaïa',
    body: 'Professor Olga Battaïa, Associate Dean for Research at KEDGE Business School, France, visited the IAI team on November 28, 2022 for in-depth discussions under the EU MAIA project on active ageing workforce.',
    fullContent: `Professor Olga Battaïa, Associate Dean for Research at the Operations Management and Information Systems Department, KEDGE Business School, France, visited our team on November 28, 2022.

In-depth discussion was held between the two parties under the **MSCA-RISE-2019** Marie Sklodowska-Curie Research and Innovation Staff Exchange: "Models and Methods for an Active Ageing Workforce: An International Academy" (MAIA project).`,
    image: 'https://uoa-iai.github.io/post/prof-o-battaia/featured.jpeg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n18',
    featured: false,
  },
  {
    id: 'n19',
    date: 'Jan 2023',
    badge: 'Seminar',
    title: 'Visit from Professor Qiang Huang',
    body: 'Professor Qiang Huang from USC\'s Epstein Department of Industrial and Systems Engineering visited the IAI Group on December 2, 2022 and delivered a seminar on engineering-informed machine learning for additive manufacturing accuracy control.',
    fullContent: `On December 2, 2022, Professor Qiang Huang from the Epstein Department of Industrial and Systems Engineering at the University of Southern California (USC) visited the Industrial AI Group.

## Seminar: Engineering-Informed Machine Learning for Additive Manufacturing Accuracy Control

Professor Huang previously held the Gordon S. Marshall Early Career Chair in Engineering at USC (2012–2016). He currently serves as:

- Department Editor for IISE Transactions
- Associate Editor for ASME Transactions, Journal of Manufacturing Science and Engineering

His recognitions include IISE Fellow, NSF CAREER Award, the 2021 IEEE CASE Best Conference Paper Award, and the 2013 IEEE Transactions on Automation Science and Engineering Best Paper Award. He holds five patents related to Machine Learning for Additive Manufacturing.`,
    image: 'https://uoa-iai.github.io/post/prof-q-huang/featured.png',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n19',
    featured: false,
  },
  {
    id: 'n20',
    date: 'Nov 2022',
    badge: 'Visit',
    title: 'Lab Visit from Christopher Luxon, Leader of the National Party',
    body: 'On October 17, 2022, Christopher Luxon, Leader of the New Zealand National Party, visited the IAI team to view research outcomes and their impact for New Zealand.',
    fullContent: `On October 17, 2022, **Christopher Luxon**, Leader of the New Zealand National Party and Leader of the Opposition, visited our team.

We showcased our research outcomes and the impact we have created for New Zealand — demonstrating our work on human-robot collaboration, intelligent manufacturing, and AI-powered automation technologies.`,
    image: 'https://uoa-iai.github.io/post/luxon/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n20',
    featured: false,
  },
  {
    id: 'n21',
    date: 'Oct 2022',
    badge: 'Event',
    title: 'We are Hosting the 2023 IEEE CASE Conference in Auckland',
    body: 'The 19th IEEE International Conference on Automation Science and Engineering (CASE 2023), themed "Automation for a Resilient Society," will be hosted in Auckland, New Zealand on August 26–29, 2023.',
    fullContent: `The 19th International Conference on Automation Science and Engineering (CASE) will be hosted in **Auckland, New Zealand** on 26–29 August, 2023.

The conference theme is **"Automation for a Resilient Society"**. IEEE CASE 2023 will give attendees a chance to learn about Aotearoa New Zealand's cutting-edge innovations and automation in the fields of:

- Manufacturing
- Agriculture and aquaculture
- Forestry
- Infrastructure
- Healthcare

As the Organising Committee Chair, Dr. Yuqian Lu is committed to making IEEE CASE 2023 an unforgettable experience.`,
    image: 'https://uoa-iai.github.io/post/ieee-case/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n21',
    featured: false,
  },
  {
    id: 'n22',
    date: 'Oct 2022',
    badge: 'Grant',
    title: 'MBIE Endeavour Fund: $10.3 Million Investment to Transform Construction',
    body: 'The HERA-led Construction 4.0 programme secured $10.3 million from the MBIE Endeavour Fund. The IAI Research Team will deliver construction automation and digitalisation solutions as part of this four-year project.',
    fullContent: `The HERA-led research programme, **"Developing a Construction 4.0 transformation of Aotearoa New Zealand's construction sector"**, has been successful in the 2022 round of the prestigious Endeavour Fund.

The $10.3 million grant will support the four-year Construction 4.0 research project. The project is centred on improving the productivity of Aotearoa New Zealand's construction industry using Construction 4.0 approaches.

**Project outcomes will benefit the construction sector through:**

- Better economic performance
- Building and infrastructure affordability
- Enhanced communication among stakeholders
- Improvements in productivity and output quality

The Industrial AI Research Team will play a key role in delivering construction automation and digitalisation solutions.`,
    image: 'https://uoa-iai.github.io/post/mbie-fund/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n22',
    featured: false,
  },
  {
    id: 'n23',
    date: 'Mar 2022',
    badge: 'Media',
    title: 'A Mobile Manipulator to Help Workers on the Factory Floor',
    body: 'Dr. Yuqian Lu is developing an intelligent autonomous mobile robot at the University of Auckland that can work alongside human operators in small New Zealand manufacturing environments, enabling flexible human-robot collaboration.',
    fullContent: `What if you had a robot assistant that could help you use a screwdriver, pick things off a shelf, and carry things around a factory? It might not be something out of a science-fiction novel too much longer.

Dr Yuqian Lu from the Department of Mechanical Engineering is creating a mobile robot that can do just that. The robot has built-in intelligence to navigate around people and obstacles, and think and act autonomously. Dr Lu wants to create a robot that can work alongside humans as part of a human-robot team to meet New Zealand's industry needs better.

Traditional automation techniques are efficient for creating standardised products at large volume: cars, phones, and more. But that doesn't work for many New Zealand manufacturers — smaller companies making highly customised products with manual or semi-automated manufacturing processes.

"You may be surprised to see the amount of manual and repetitive work in the factories of some of the most innovative high-tech companies." — Dr Yuqian Lu

An autonomous mobile robot allows manufacturers an unprecedented level of flexibility. It can be integrated with already-existing manufacturing cells to co-manipulate manual work. New Zealand small manufacturers can introduce flexible robots gradually, test them out, and take their own steps towards automating their facilities.

"We want to create a human-robot collaboration." — Dr Yuqian Lu

![Mobile Manipulator](https://uoa-iai.github.io/post/mobile-manipulator/mobile_manipulator_hu8571d454dca6e406c99cc541fc63b1db_118177_8673882b91ed9e666f2e3491151b4d43.webp)`,
    image: 'https://uoa-iai.github.io/post/mobile-manipulator/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n23',
    featured: false,
  },
  {
    id: 'n24',
    date: 'Feb 2022',
    badge: 'Award',
    title: 'RCIM Best Paper Award',
    body: 'Dr. Yuqian Lu received the Robotics and Computer-Integrated Manufacturing (RCIM) Best Paper Award for his first-authored article on Digital Twin-driven smart manufacturing, which recorded the highest number of Scopus citations over the past five years.',
    fullContent: `Dr. Yuqian Lu has been awarded the **2021 RCIM Best Paper Award** for his first-authored article:

**"Digital Twin-driven smart manufacturing: Connotation, reference model, applications and research issues"**

The Best Paper Award is given each year to the RCIM paper published in the past seven years with the highest number of citations measured in Scopus over the past five years. This is a significant achievement recognising the impact of the group's work on Digital Twin and Smart Manufacturing.`,
    image: 'https://uoa-iai.github.io/post/rcimaward/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n24',
    featured: false,
  },
  {
    id: 'n25',
    date: 'Oct 2021',
    badge: 'Grant',
    title: '2021 Science for Technological Innovation (SfTI) National Science Challenge Grant',
    body: 'The Industrial AI Team received a two-year SfTI seed grant for "Ultra-reliable time-sensitive industrial control in the cloud," developing 5G scheduling algorithms for cloud-controlled industrial robotics in collaboration with VUW, Spark, and Nokia.',
    fullContent: `The Industrial AI Team at the University of Auckland was awarded the prestigious **SfTI seed grant** over two years to advance time-sensitive industrial control technologies in a 5G environment, in collaboration with Victoria University of Wellington, Spark New Zealand, and Nokia.

## Project Title
Ultra-reliable time-sensitive industrial control in the cloud

## Overview

As the momentum of 5G builds, a range of applications will be developed — including real-time cloud-controlled industrial systems and self-driving vehicles. The need is for 5G technology to provide robust and time-sensitive data transmission over wide area networks (WANs).

This project, led by University of Auckland researchers, aims to design a data communication scheduling algorithm and supporting streaming technologies. This will enable time-sensitive transmission of control data for multiple devices over WANs, ensuring that cloud-controlled robots can operate safely and precisely.`,
    image: 'https://uoa-iai.github.io/post/sfti/featured.jpg',
    linkText: 'Read more',
    linkUrl: 'news-detail.html?id=n25',
    featured: false,
  },
];

// ── Data version — bump to reset localStorage to new defaults ──
const DATA_VERSION = '5';

(function migrateIfNeeded() {
  if (localStorage.getItem('iai_data_version') !== DATA_VERSION) {
    localStorage.removeItem('iai_publications');
    localStorage.removeItem('iai_news');
    localStorage.setItem('iai_data_version', DATA_VERSION);
  }
})();

// ── Storage helpers ───────────────────────────────────────

function getPublications() {
  try {
    const raw = localStorage.getItem('iai_publications');
    return raw ? JSON.parse(raw) : DEFAULT_PUBLICATIONS;
  } catch { return DEFAULT_PUBLICATIONS; }
}

function savePublications(list) {
  localStorage.setItem('iai_publications', JSON.stringify(list));
}

function getNews() {
  try {
    const raw = localStorage.getItem('iai_news');
    return raw ? JSON.parse(raw) : DEFAULT_NEWS;
  } catch { return DEFAULT_NEWS; }
}

function saveNews(list) {
  localStorage.setItem('iai_news', JSON.stringify(list));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
