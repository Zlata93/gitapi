const express = require('express');
const router = express.Router();
const fs = require('fs');
const exec = require('child_process').exec;

const pathToRepos = process.argv[2];

function getDirContent(req, res, next) {
    fs.readdir(pathToRepos , (err, data) => {
        if (err) {
            return next(err);
        }
        res.locals.filenames = data;
        next();
    });
}

function execute(command, cb) {
    exec(command, (error, stdout, stderr) => {
        cb(stdout);
    });
}

// @route    GET api/repos
// @desc     Возвращает массив репозиториев, которые имеются в папке
// @access   Public
router.get('/', getDirContent, (req, res) => {
    res.send(res.locals.filenames);
});

// @route    GET /api/repos/:repositoryId/commits/:commitHash
// @desc     Возвращает массив коммитов в данной ветке (или хэше коммита) вместе с датами их создания
// @access   Public
router.get('/:repositoryId/commits/:commitHash', (req, res) => {
    const repo = req.params.repositoryId;
    const branch = req.params.commitHash;
    exec(`cd ${pathToRepos}/${repo} && git checkout ${branch} && git log`, (err, stdout, stderr) => {
        if (err) {
            console.error(`exec1 error: ${err}`);
            return res.json({ msg: 'Repo not found' });
        }
        res.send(stdout);
    });
});

// @route    GET /api/repos/:repositoryId/commits/:commitHash/diff
// @desc     Возвращает diff коммита в виде строки
// @access   Public

// @route    GET /api/repos/:repositoryId(/tree/:commitHash/:path)
// @desc     Возвращает содержимое репозитория по названию ветки (или хэшу комита).
//           Параметр repositoryId - название репозитория (оно же - имя папки репозитория).
//           То, что в скобках - опционально, если отсутствует и branchName, и path -
//           отдать актуальное содержимое в корне в главной ветке репозитория.
// @access   Public

// @route    GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile
// @desc     Возвращает содержимое конкретного файла, находящегося по пути pathToFile в ветке
//           (или по хэшу коммита) branchName. С используемой памятью должно быть все в порядке.
// @access   Public

// @route    DELETE /api/repos/:repositoryId
// @desc     Безвозвратно удаляет репозиторий
// @access   Public

// @route    POST /api/repos/:repositoryId + { url: ‘repo-url’ }
// @desc     Добавляет репозиторий в список, скачивает его по переданной в теле запроса
//           ссылке и добавляет в папку со всеми репозиториями.
// @access   Public

module.exports = router;
